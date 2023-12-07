<script setup>
import Inputa from "../components/InputField.vue";
import Navigation from "../components/Navigation.vue";
</script>

<template>
    <div>
        <div>
            <Navigation />
        </div>
        <div class="flex justify-between items-center my-5">
            <h1 class="ml-10 text-xl uppercase font-bold">Danh sách cac loai file bi cam</h1>
            <button class="mr-10 px-5 p-1.5 rounded bg-blue-700 font-bold text-white" type="button" @click="Create">
                Thêm mới
            </button>
        </div>
        <div>
            <div class="flex justify-between items-center my-5">
                <div class="grid grid-cols-12 gap-3 p-6">
                    <div class="col-span-4">
                        <Inputa label="" type="text" placeholder="thuộc tính cần tìm kiếm" v-model="fattr" />
                    </div>
                    <div class="col-span-4">
                        <Inputa label="" type="text" placeholder="từ khoá" v-model="keyword" />
                    </div>
                    <div class="col-span-4 text-center">
                        <button @click="Find" type="button"
                            class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Tìm kiếm
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative overflow-x-auto mt-5">
            <table class="w-50 text-sm text-left text-gray-500">
                <thead class="text-center text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3" @click="sortBy('IDLOAIFILE')">id loaifile</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('LOAIFILE')">loaifile</th>
                        <th scope="col" class="w-60"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in FileCams" class="bg-white border-b">
                        <td class="px-6 py-4">
                            <p class="font-bold">{{ item.IDLOAIFILE }}</p>
                        </td>
                        <td class="px-6 py-4">
                            <p class="font-bold">{{ item.LOAIFILE }}</p>
                        </td>
                        <td class="px-6 py-4 flex justify-center gap-2">
                            <button @click="Update(item)" class="px-4 py-1 rounded bg-cyan-700 text-white font-bold">
                                Chỉnh sửa
                            </button>
                            <button @click="Delete(item.IDLOAIFILE)"
                                class="px-4 py-1 rounded bg-red-800 text-white font-bold">
                                Xóa
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="FileCamModal" tabindex="-1" aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow">
                    <!-- Modal header -->
                    <div class="bg-blue-500 flex items-start justify-between p-4 border-b rounded-t">
                        <h3 class="text-xl font-semibold text-gray-900">
                            {{ FileCamModal.txtTitle }}
                        </h3>
                    </div>

                    <!-- Modal body -->
                    <div class="grid grid-cols-12 gap-3 p-6">
                        <div class="col-span-6">
                            <Inputa label="IDLOAIFILE" type="text" placeholder="" v-model="FileCamModal.dataFileCam.IDLOAIFILE" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="loaifile" type="text" placeholder=""
                                v-model="FileCamModal.dataFileCam.LOAIFILE" />
                        </div>
                    </div>

                    <!-- Modal footer -->
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                        <button @click="Submit" type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Lưu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "../fetch/axios";
import { Modal } from "flowbite";

export default {
    name: "FileCams",
    data() {
        return {
            sortKey: '',
            sortOrders: {
                IDLOAIFILE: 1,
                LOAIFILE: 1,
            },
            keyword: "",
            fattr: "",
            FileCams: [],
            FileCamModal: {
                txtTitle: "",
                submitType: null,
                dataFileCam: {
                    IDLOAIFILE: null,
                    LOAIFILE: null,
                },
            },
            modal: null,
        };
    },
    async mounted() {
        this.modal = new Modal(document.querySelector("#FileCamModal"));
        await this.getFileCams();
    },
    methods: {
        sortBy(key) {
            this.sortKey = key;
            this.FileCams.sort((a, b) => {
                const x = a[key];
                const y = b[key];
                const order = this.sortOrders[key] || 1;

                // Modify the comparison logic based on your data types and sorting requirements
                if (x < y) return order;
                if (x > y) return -order;
                return 0;
            });
            this.sortOrders[key] = this.sortOrders[key] * -1;
        },
        async getFileCams() {
            const res = await axios.get("/filecam");
            this.FileCams = await res.data.map((item) => {
                return item;
            });
        },
        Create() {
            this.modal.toggle();
            this.FileCamModal = {
                txtTitle: "Thêm mới tai khoan",
                submitType: "create",
                dataFileCam: {
                    IDLOAIFILE: null,
                    LOAIFILE: null,
                },
            };
        },
        async Update(FileCamItem) {
            this.modal.toggle();
            this.FileCamModal = {
                txtTitle: "Chỉnh sửa filecam",
                submitType: "update",
                dataFileCam: {
                    IDLOAIFILE: FileCamItem.IDLOAIFILE,
                    LOAIFILE: FileCamItem.LOAIFILE,
                },
            };
        },
        async Submit() {
            const submitType = this.FileCamModal.submitType;
            const data = this.FileCamModal.dataFileCam;
            if (submitType === "create") {
                await axios.post("FileCam/store", data);
            } else {
                await axios.put(`FileCam/update`, data);
            }

            await this.getFileCams();
            this.modal.hide();
        },
        async Delete(id) {
            await axios.delete(`filecam/delete/${id}`);
            await this.getFileCams();
        },
        async Find() {
            const res = await axios.get(`/filecam/find/${this.fattr}/${this.keyword}`);
            this.FileCams = await res.data[0].map((item) => {
                return item;
            });
        },
    },
};
</script>
