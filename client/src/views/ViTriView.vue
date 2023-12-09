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
            <h1 class="ml-10 text-xl uppercase font-bold">Danh sách VITRI</h1>
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
            <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-center text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3" @click="sortBy('IDVITRI')">ID vitri</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('COSO')">CO SO</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('TOA')">TOA</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('PHONG')">phong</th>
                        <th scope="col" class="w-60"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in ViTris" class="bg-white border-b text-center">
                        <td class="px-6 py-4">
                            <p class="font-bold">{{ item.IDVITRI }}</p>
                        </td>
                        <td class="px-6 py-4">
                            <p class="font-bold">{{ item.COSO }}</p>
                        </td>
                        <td class="px-6 py-4">
                            {{ item.TOA }}
                        </td>
                        <td class="px-6 py-4">
                            <p>{{ item.PHONG }}</p>
                        </td>

                        <td class="px-6 py-4 flex justify-center gap-2">
                            <button @click="Detail(item)" class="px-4 py-1 rounded bg-cyan-700 text-white font-bold">
                                Chi tiết
                            </button>
                            <button @click="Update(item)" class="px-4 py-1 rounded bg-cyan-700 text-white font-bold">
                                Chỉnh sửa
                            </button>
                            <button @click="Delete(item.IDVITRI)" class="px-4 py-1 rounded bg-red-800 text-white font-bold">
                                Xóa
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="ViTriModal" tabindex="-1" aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow">
                    <!-- Modal header -->
                    <div class="bg-blue-500 flex items-start justify-between p-4 border-b rounded-t">
                        <h3 class="text-xl font-semibold text-gray-900">
                            {{ ViTriModal.txtTitle }}
                        </h3>
                    </div>

                    <!-- Modal body -->
                    <div class="grid grid-cols-12 gap-3 p-6">
                        <div class="col-span-6">
                            <Inputa label="IDVITRI" type="text" placeholder="" v-model="ViTriModal.dataViTri.IDVITRI" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="COSO" type="text" placeholder="" v-model="ViTriModal.dataViTri.COSO" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="TOA" type="text" placeholder="" v-model="ViTriModal.dataViTri.TOA" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="PHONG" type="text" placeholder="" v-model="ViTriModal.dataViTri.PHONG" />
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
import moment from "moment";

export default {
    name: "ViTris",

    data() {
        return {
            sortKey: '',
            sortOrders: {
                // Define default sort orders for each column
                IDVITRI: 1,
                COSO: 1,
                TOA: 1,
                PHONG: 1,
            },
            keyword: "",
            fattr: "",
            ViTris: [],
            rooms: [],
            ViTriModal: {
                txtTitle: "",
                submitType: null,
                dataViTri: {
                    IDVITRI: null,
                    COSO: null,
                    TOA: null,
                    PHONG: null,
                },
            },
            modal: null,

            ChiTietViTri: {
                txtTitle: "",
                submitType: null,
                dataViTri: {
                    IDVITRI: null,
                    COSO: null,
                    TOA: null,
                    PHONG: null,
                    MAYINS: [],
                },
            },
            chitiet: null,
        };
    },

    mounted() {
        this.getViTris();
        this.modal = new Modal(document.querySelector("#ViTriModal"));
        this.chitiet = new Modal(document.querySelector("#ChiTietViTri"));
    },
    methods: {
        sortBy(key) {
            this.sortKey = key;
            this.ViTris.sort((a, b) => {
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
        async getViTris() {
            const res = await axios.get("/vitri");
            this.ViTris = await res.data.map((item) => {
                return item;
            });
        },
        Create() {
            this.modal.toggle();
            this.ViTriModal = {
                txtTitle: "Thêm mới vitri",
                submitType: "create",
                dataViTri: {
                    IDVITRI: null,
                    COSO: null,
                    TOA: null,
                    PHONG: null,
                },
            };
        },
        Update(ViTriItem) {
            this.modal.toggle();
            this.ViTriModal = {
                txtTitle: "Chỉnh sửa vitri",
                submitType: "update",
                dataViTri: {
                    IDVITRI: ViTriItem.IDVITRI,
                    COSO: ViTriItem.COSO,
                    TOA: ViTriItem.TOA,
                    PHONG: ViTriItem.PHONG,
                },

            };
        },
        async Detail(ViTriItem) {
            this.chitiet.toggle();
            const mayins = await axios.get(`/mayin/findByViTri/${ViTriItem.IDVITRI}`);
            this.ChiTietViTri = {
                txtTitle: "Chi tiết vitri",
                submitType: "detail",
                dataViTri: {
                    IDVITRI: ViTriItem.IDVITRI,
                    COSO: ViTriItem.COSO,
                    TOA: ViTriItem.TOA,
                    PHONG: ViTriItem.PHONG,
                    MAYINS: mayins.data,
                },
            };
        },
        async Submit() {

            const submitType = this.ViTriModal.submitType;
            const data = this.ViTriModal.dataViTri;
            if (submitType === "create") {
                await axios.post("vitri/store", data);
            } else {
                await axios.put(`vitri/update`, data);
            }
            this.modal.hide();
            await this.getViTris();
        },
        async Delete(id) {
            const mayins = await axios.get(`/mayin/findByViTri/${id}`);
            if (mayins.data.length > 0) {
                alert("Không thể xóa vì có máy in thuộc vị trí này");
                return;
            }

            const res = await axios.delete(`vitri/delete/${id}`);
            await this.getViTris();
        },
        async Find() {
            const res = await axios.get(`/vitri/find/${this.fattr}/${this.keyword}`);
            this.ViTris = await res.data[0].map((item) => {
                return item;
            });
        },
    },
};
</script>
