<script setup>
import Inputa from "../components/InputField.vue";
import Navigation from "../components/Navigation.vue";
</script>

<template>
    <div>
        <div>
            <Navigation />
        </div>
        <div class="flex justify-between items-center text-center my-5">
            <h1 class="ml-10 text-xl text-center uppercase font-bold">Danh sách máy in</h1>
            <button class="mr-10 px-5 p-1.5 rounded bg-blue-700 font-bold text-white" type="button" @click="Create">
                Thêm mới
            </button>
        </div>
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
        <div class="relative overflow-x-auto mt-5">
            <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-center text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3" @click="sortBy('IDMAYIN')">id mayin</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('IDVITRI')">id vitri</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('TENMAYIN')">tenmayin</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('MODEL')">model</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('MOTA')">mota</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('TINHTRANG')">tinhtrang</th>
                        <th scope="col" class="w-60"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in MayIns" class="bg-white border-b">
                        <td class="px-6 py-4">
                            <p class="font-bold">{{ item.IDMAYIN }}</p>
                        </td>
                        <td class="px-6 py-4">
                            <p class="font-bold">{{ item.IDVITRI }}</p>
                        </td>
                        <td class="px-6 py-4">
                            {{ item.TENMAYIN }}
                        </td>
                        <td class="px-6 py-4">
                            <p>{{ item.MODEL }}</p>
                        </td>
                        <td class="px-6 py-4">
                            <p>
                                {{ item.MOTA }}
                            </p>
                        </td>
                        <td class="px-6 py-4">
                            <p>
                                {{ item.TINHTRANG }}
                            </p>
                        </td>

                        <td class="px-6 py-4 flex justify-center gap-2">
                            <button @click="Detail(item)" class="px-4 py-1 rounded bg-cyan-700 text-white font-bold">
                                Chi tiết
                            </button>
                            <button @click="Update(item)" class="px-4 py-1 rounded bg-cyan-700 text-white font-bold">
                                Chỉnh sửa
                            </button>
                            <button @click="Delete(item.IDMAYIN)" class="px-4 py-1 rounded bg-red-800 text-white font-bold">
                                Xóa
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="MayInModal" tabindex="-1" aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow">
                    <!-- Modal header -->
                    <div class="bg-blue-500 flex items-start justify-between p-4 border-b rounded-t">
                        <h3 class="text-xl font-semibold text-gray-900">
                            {{ MayInModal.txtTitle }}
                        </h3>
                    </div>

                    <!-- Modal body -->
                    <div class="grid grid-cols-12 gap-3 p-6">
                        <div class="col-span-12">
                            <Inputa label="id mayin" type="text" placeholder="" v-model="MayInModal.dataMayIn.IDMAYIN" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="id vitri" type="text" placeholder="" v-model="MayInModal.dataMayIn.IDVITRI" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="ten mayin" type="text" placeholder="" v-model="MayInModal.dataMayIn.TENMAYIN" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="model" type="text" placeholder="" v-model="MayInModal.dataMayIn.MODEL" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="mota" type="text" placeholder="" v-model="MayInModal.dataMayIn.MOTA" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="tinhtrang" type="text" placeholder="" v-model="MayInModal.dataMayIn.TINHTRANG" />
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
        <div id="ChiTietMayIn" tabindex="-1" aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow">
                    <!-- Modal header -->
                    <div class="bg-blue-500 flex items-start justify-between p-4 border-b rounded-t">
                        <h3 class="text-xl font-semibold text-gray-900">
                            {{ ChiTietMayIn.txtTitle }}
                        </h3>
                    </div>

                    <!-- Modal body -->
                    <div class="grid grid-cols-12 gap-3 p-6">
                        <div class="col-span-12">
                            <Inputa label="id mayin" type="text" placeholder="" v-model="ChiTietMayIn.dataMayIn.IDMAYIN" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="id vitri" type="text" placeholder="" v-model="ChiTietMayIn.dataMayIn.IDVITRI" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="ten mayin" type="text" placeholder=""
                                v-model="ChiTietMayIn.dataMayIn.TENMAYIN" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="model" type="text" placeholder="" v-model="ChiTietMayIn.dataMayIn.MODEL" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="mota" type="text" placeholder="" v-model="ChiTietMayIn.dataMayIn.MOTA" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="tinhtrang" type="text" placeholder=""
                                v-model="ChiTietMayIn.dataMayIn.TINHTRANG" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="hinhanh" type="text" placeholder="" v-model="ChiTietMayIn.dataMayIn.HINHANH" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="coso" type="text" placeholder="" v-model="ChiTietMayIn.dataMayIn.COSO" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="toa" type="text" placeholder="" v-model="ChiTietMayIn.dataMayIn.TOA" />

                        </div>
                        <div class="col-span-6">
                            <Inputa label="phong" type="text" placeholder="" v-model="ChiTietMayIn.dataMayIn.PHONG" />
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
    name: "MayIns",
    data() {
        return {
            sortKey: '',
            sortOrders: {
                // Define default sort orders for each column
                IDMAYIN: 1,
                IDVITRI: 1,
                TENMAYIN: 1,
                MODEL: 1,
                MOTA: 1,
                TINHTRANG: 1,
            },
            keyword: "",
            fattr: "",
            MayIns: [],
            MayInModal: {
                txtTitle: "",
                submitType: null,
                dataMayIn: {
                    IDMAYIN: null,
                    IDVITRI: null,
                    TENMAYIN: null,
                    MODEL: null,
                    MOTA: null,
                    TINHTRANG: null,
                },
            },
            ChiTietMayIn: {
                txtTitle: "",
                submitType: null,
                dataMayIn: {
                    IDMAYIN: null,
                    IDVITRI: null,
                    TENMAYIN: null,
                    MODEL: null,
                    MOTA: null,
                    TINHTRANG: null,
                    HINHANH: null,
                    COSO: null,
                    TOA: null,
                    PHONG: null,
                }
            },
            modal: null,
            chitiet: null,
        };
    },

    mounted() {
        this.getMayIns();
        this.modal = new Modal(document.querySelector("#MayInModal"));
        this.chitiet = new Modal(document.querySelector("#ChiTietMayIn"));
    },
    methods: {
        sortBy(key) {
            this.sortKey = key;
            this.MayIns.sort((a, b) => {
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
        async getMayIns() {
            const res = await axios.get("/mayin");
            this.MayIns = await res.data.map((item) => {
                return item;
            });
        },
        Create() {
            this.modal.toggle();
            this.MayInModal = {
                txtTitle: "Thêm mới Máy In",
                submitType: "create",
                dataMayIn: {
                    IDMAYIN: null,
                    IDVITRI: null,
                    TENMAYIN: null,
                    MODEL: null,
                    MOTA: null,
                    TINHTRANG: null,
                },
            };
        },
        async Update(MayInItem) {
            this.modal.toggle();

            this.MayInModal = {
                txtTitle: "Chỉnh sửa Máy In",
                submitType: "update",
                dataMayIn: {
                    IDMAYIN: MayInItem.IDMAYIN,
                    IDVITRI: MayInItem.IDVITRI,
                    TENMAYIN: MayInItem.TENMAYIN,
                    MODEL: MayInItem.MODEL,
                    MOTA: MayInItem.MOTA,
                    TINHTRANG: MayInItem.TINHTRANG,
                },
            };
        },
        async Detail(MayInItem) {
            this.chitiet.toggle();
            const vitri = await axios.get(`/vitri/find/${MayInItem.IDVITRI}`);
            this.ChiTietMayIn = {
                txtTitle: "Chi tiết Máy In",
                dataMayIn: {
                    IDMAYIN: MayInItem.IDMAYIN,
                    IDVITRI: MayInItem.IDVITRI,
                    TENMAYIN: MayInItem.TENMAYIN,
                    MODEL: MayInItem.MODEL,
                    MOTA: MayInItem.MOTA,
                    TINHTRANG: MayInItem.TINHTRANG,
                    HINHANH: MayInItem.HINHANH,
                    COSO: vitri.data.COSO,
                    TOA: vitri.data.TOA,
                    PHONG: vitri.data.PHONG,
                },
            };
        },
        async Submit() {
            const submitType = this.MayInModal.submitType;
            const data = this.MayInModal.dataMayIn;

            if (submitType === "create") {
                await axios.post("mayin/store", data);
            } else {
                console.log(data)
                await axios.put(`mayin/update`, data);
            }
            await this.getMayIns();
            this.modal.hide();
        },
        async Delete(id) {
            await axios.delete(`mayin/delete/${id}`);
            await this.getMayIns();
        },
        async Find() {
            const res = await axios.get(`/mayin/find/${this.fattr}/${this.keyword}`);
            this.MayIns = await res.data[0].map((item) => {
                return item;
            });
        },

    },
};
</script>
