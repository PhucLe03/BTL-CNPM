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
            <h1 class="ml-10 text-xl uppercase font-bold">Danh sách tai khoan</h1>
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
                        <th scope="col" class="px-6 py-3" @click="sortBy('IDTAIKHOAN')">id taikhoan</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('TENDANGNHAP')">tendangnhap</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('PWD')">matkhau</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('VAITRO')">vaitro</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('IDSINHVIEN')">idsinhvien</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('DA4PAGE')">A4 con lai</th>
                        <th scope="col" class="w-60"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in TaiKhoans" class="bg-white border-b">
                        <td class="px-6 py-4">
                            <p class="font-bold">{{ item.IDTAIKHOAN }}</p>
                        </td>
                        <td class="px-6 py-4">
                            <p class="font-bold">{{ item.TENDANGNHAP }}</p>
                        </td>
                        <td class="px-6 py-4">
                            {{ item.PWD }}
                        </td>
                        <td class="px-6 py-4">
                            <p>{{ item.VAITRO }}</p>
                        </td>
                        <td class="px-6 py-4">
                            <p>
                                {{ item.IDSINHVIEN }}
                            </p>
                        </td>
                        <td class="px-6 py-4">
                            <p>
                                {{ item.DA4PAGE }}
                            </p>
                        </td>
                        <td class="px-6 py-4 flex justify-center gap-2">
                            <button @click="Update(item)" class="px-4 py-1 rounded bg-cyan-700 text-white font-bold">
                                Chỉnh sửa
                            </button>
                            <button @click="Delete(item.IDTAIKHOAN)"
                                class="px-4 py-1 rounded bg-red-800 text-white font-bold">
                                Xóa
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="TaiKhoanModal" tabindex="-1" aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow">
                    <!-- Modal header -->
                    <div class="bg-blue-500 flex items-start justify-between p-4 border-b rounded-t">
                        <h3 class="text-xl font-semibold text-gray-900">
                            {{ TaiKhoanModal.txtTitle }}
                        </h3>
                    </div>

                    <!-- Modal body -->
                    <div class="grid grid-cols-12 gap-3 p-6">
                        <div class="col-span-6">
                            <Inputa label="ID" type="text" placeholder="" v-model="TaiKhoanModal.dataTaiKhoan.IDTAIKHOAN" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="TENDANGNHAP" type="text" placeholder=""
                                v-model="TaiKhoanModal.dataTaiKhoan.TENDANGNHAP" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="PWD" type="text" placeholder="" v-model="TaiKhoanModal.dataTaiKhoan.PWD" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="VAITRO" type="text" placeholder="" v-model="TaiKhoanModal.dataTaiKhoan.VAITRO" />
                        </div>

                        <div class="col-span-6">
                            <Inputa label="IDSINHVIEN" type="text" placeholder=""
                                v-model="TaiKhoanModal.dataTaiKhoan.IDSINHVIEN" />
                        </div>

                        <div class="col-span-6">
                            <Inputa label="so trang con lai" type="text" placeholder=""
                                v-model="TaiKhoanModal.dataTaiKhoan.DA4PAGE" />
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
    name: "TaiKhoans",
    data() {
        return {
            sortKey: '',
            sortOrders: {
                IDTAIKHOAN: 1,
                TENDANGNHAP: 1,
                PWD: 1,
                VAITRO: 1,
                IDSINHVIEN: 1,
                DA4PAGE: 1,
            },
            keyword: "",
            fattr: "",
            TaiKhoans: [],
            TaiKhoanModal: {
                txtTitle: "",
                submitType: null,
                dataTaiKhoan: {
                    IDTAIKHOAN: null,
                    TENDANGNHAP: null,
                    PWD: null,
                    VAITRO: null,
                    IDSINHVIEN: null,
                    DA4PAGE: null,
                },
            },
            modal: null,
        };
    },
    async mounted() {
        this.modal = new Modal(document.querySelector("#TaiKhoanModal"));
        await this.getTaiKhoans();
    },
    methods: {
        sortBy(key) {
            this.sortKey = key;
            this.TaiKhoans.sort((a, b) => {
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
        async getTaiKhoans() {
            const res = await axios.get("/taikhoan");
            this.TaiKhoans = await res.data.map((item) => {
                return item;
            });
        },
        Create() {
            this.modal.toggle();
            this.TaiKhoanModal = {
                txtTitle: "Thêm mới tai khoan",
                submitType: "create",
                dataTaiKhoan: {
                    IDTAIKHOAN: null,
                    TENDANGNHAP: null,
                    PWD: null,
                    VAITRO: null,
                    IDSINHVIEN: null,
                    DA4PAGE: null,
                },
            };
        },
        async Update(TaiKhoanItem) {
            this.modal.toggle();
            this.TaiKhoanModal = {
                txtTitle: "Chỉnh sửa hội đồng",
                submitType: "update",
                dataTaiKhoan: {
                    IDTAIKHOAN: TaiKhoanItem.IDTAIKHOAN,
                    TENDANGNHAP: TaiKhoanItem.TENDANGNHAP,
                    PWD: TaiKhoanItem.PWD,
                    VAITRO: TaiKhoanItem.VAITRO,
                    IDSINHVIEN: TaiKhoanItem.IDSINHVIEN,
                    DA4PAGE: TaiKhoanItem.DA4PAGE,
                },
            };
        },
        async Submit() {
            const submitType = this.TaiKhoanModal.submitType;
            const data = this.TaiKhoanModal.dataTaiKhoan;

            if (submitType === "create") {
                await axios.post("taikhoan/store", data);
            } else {
                await axios.put(`taikhoan/update`, data);
            }

            await this.getTaiKhoans();
            this.modal.hide();
        },
        async Delete(id) {
            await axios.delete(`taikhoan/delete/${id}`);
            await this.getTaiKhoans();
        },
        async Find() {
            const res = await axios.get(`/TaiKhoan/find/${this.fattr}/${this.keyword}`);
            this.TaiKhoans = await res.data[0].map((item) => {
                return item;
            });
        },
    },
};
</script>
