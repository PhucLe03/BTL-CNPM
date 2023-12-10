<script setup>
import Inputa from "../components/InputField.vue";
import Navigation from "../components/Navigation.vue";
import Header from "../components/header.vue";
</script>

<template>
    <div class="flex h-screen overflow-hidden">
        <div>
            <Navigation />
        </div>

        <div class="flex flex-col flex-1 relative overflow-x-hidden overflow-y-auto">
            <div>
                <Header />
            </div>

            <main>
                <div class="max-w-screen-2xl mx-auto p-4 md:p-6 2xl:p-10 bg-gray-100">
                    <!-- ------ -->
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                        <h1 class="text-2xl uppercase font-bold">
                            Configuration
                        </h1>

                        <div>
                            <nav>
                                <ol class="flex items-center gap-2">
                                    <li><a href="index.html">Dashboard /</a></li>
                                    <li class="text-primary">Configuration</li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                    <!-- ------------------------------------------------- -->


                    <div class="flex flex-col gap-10">
                        <!-- Printer List -->
                        <div class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow sm:px-7.5 xl:pb-1">
                            <div class="flex justify-between items-center">
                                <h4 class="mb-6 text-xl font-bold text-black uppercase">
                                    Permitted File Type List
                                </h4>
                                <button class="px-5 p-1.5 rounded bg-green-700 font-bold text-white mt-0" type="button"
                                    @click="Create">
                                    Add New Type
                                </button>
                            </div>

                            <div class="flex justify-between items-center my-5">
                                <div class="grid grid-cols-12 gap-3 p-6">
                                    <div class="col-span-4">
                                        <select id="status" v-model=fattr
                                            class="mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 sm:text-sm">
                                            <option value="IDLOAIFILE">
                                                Type ID
                                            </option>
                                            <option value="LOAIFILE">
                                                Type
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-span-4">
                                        <Inputa label="" type="text" placeholder="Keyword" v-model="keyword" />
                                    </div>
                                    <div class="col-span-3 text-center">
                                        <button @click="Find" type="button"
                                            class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="relative overflow-x-auto mt-5">
                                <table class="w-50 text-sm text-left text-gray-500">
                                    <thead
                                        class="text-center font-medium text-sm text-gray-700 uppercase bg-gray-100 xsm:text-base">
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
                                                <button @click="Update(item)"
                                                    class="px-4 py-1 rounded bg-cyan-700 text-white font-bold">
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
                            <div class="w-50 float-right text-sm text-right text-gray-500">
                                <h3 class=" text-l uppercase float-left font-bold">Cài lại số trang mặc định</h3>
                                <div class="flex justify-between items-center my-5">

                                    <div class="grid grid-cols-12 gap-3 p-6">
                                        <div class="col-span-6">
                                            <Inputa label="" type="number" placeholder="so trang" v-model="d4p" />
                                        </div>
                                        <div class="col-span-6 text-center">
                                            <button @click="D4Page" type="button"
                                                class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                                Cài lại
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </main>

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
                                <Inputa label="IDLOAIFILE" :read-only="true" type="text" placeholder=""
                                    v-model="FileCamModal.dataFileCam.IDLOAIFILE" />
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
    </div>
</template>

<script>
import axios from "../fetch/axios";
import { Modal } from "flowbite";

export default {
    name: "FileCams",
    data() {
        return {
            d4p: 0,
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
        async D4Page() {
            try {
                await axios.get(`/filecam/d4page/${this.d4p}`);
                alert("Cài lại thành công");
            } catch (error) {
                console.log(error);
            }

        },
    },
};
</script>
