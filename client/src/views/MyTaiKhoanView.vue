<script setup>
import Inputa from "../components/InputField.vue";
import Navigation from "../components/UserNavigation.vue";
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
                            Smart Printing Service
                        </h1>

                        <div>
                            <nav>
                                <ol class="flex items-center gap-2">
                                    <li>
                                        <a href="index.html">Dashboard /</a>
                                    </li>
                                    <li class="text-primary">
                                        Printing Service
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <!-- ------------------------------------------------- -->

                    <div class="flex flex-col gap-10">
                        <!-- Printer List -->
                        <div class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow sm:px-7.5 xl:pb-1">
                            <div class="flex justify-between items-center">
                                <h4 class="mb-6 text-xl font-bold text-black">
                                    Your Account
                                </h4>
                            </div>

                            <div class="relative overflow-x-auto mt-5">
                                <table class="w-full text-sm text-left text-gray-500">
                                    <thead
                                        class="text-center font-medium text-sm text-gray-700 uppercase bg-gray-100 xsm:text-base">
                                        <tr>
                                            <th scope="col" class="px-6 py-3" @click="sortBy('IDTAIKHOAN')">
                                                Account ID
                                            </th>
                                            <th scope="col" class="px-6 py-3" @click="sortBy('TENDANGNHAP')">
                                                Username
                                            </th>
                                            <th scope="col" class="px-6 py-3" @click="sortBy('PWD')">
                                                Password
                                            </th>
                                            <th scope="col" class="px-6 py-3" @click="sortBy('VAITRO')">
                                                Role
                                            </th>
                                            <th scope="col" class="px-6 py-3" @click="sortBy('IDSINHVIEN')">
                                                Student ID
                                            </th>
                                            <th scope="col" class="px-6 py-3" @click="sortBy('DA4PAGE')">
                                                A4 paper
                                            </th>
                                            <th scope="col" class="w-60"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in TaiKhoans" class="bg-white border-b">
                                            <td class="text-center">
                                                <p class="font-bold">
                                                    {{ item.IDTAIKHOAN }}
                                                </p>
                                            </td>
                                            <td class="text-center">
                                                <img src="../images/user.svg" alt="Brand" style="
                                                        vertical-align: middle;
                                                        display: inline-block;
                                                        width: 40px;
                                                    " />
                                                <p class="font-bold">
                                                    {{ item.TENDANGNHAP }}
                                                </p>
                                            </td>
                                            <td class="text-center">
                                                {{ item.PWD }}
                                            </td>
                                            <td class="text-center">
                                                <p>{{ item.VAITRO }}</p>
                                            </td>
                                            <td class="text-center">
                                                <p>
                                                    {{ item.IDSINHVIEN }}
                                                </p>
                                            </td>
                                            <td class="text-center">
                                                <p>
                                                    {{ item.DA4PAGE }}
                                                </p>
                                            </td>
                                            <td class="px-6 py-4 flex justify-center gap-2">
                                                <button @click="Update(item)"
                                                    class="px-4 py-1 rounded bg-yellow-600 text-white font-bold">
                                                    Edit
                                                </button>
                                                <button @click="
                                                    Delete(item.IDMAYIN)
                                                    " class="px-4 py-1 rounded bg-red-800 text-white font-bold">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
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
            sortKey: "",
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
            const res = await axios.get(`/taikhoan/${this.$route.params.id}`);
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
            const res = await axios.get(
                `/TaiKhoan/find/${this.fattr}/${this.keyword}`
            );
            this.TaiKhoans = await res.data[0].map((item) => {
                return item;
            });
        },
    },
};
</script>
