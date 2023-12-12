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
                            User Management
                        </h1>

                        <div>
                            <nav>
                                <ol class="flex items-center gap-2">
                                    <li>
                                        <a href="index.html">Dashboard /</a>
                                    </li>
                                    <li class="text-primary">
                                        User Management
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
                                <h4 class="mb-6 text-xl font-bold text-black uppercase">
                                    Account List
                                </h4>

                                <button class="px-5 p-1.5 rounded bg-green-700 font-bold text-white mt-0" type="button"
                                    @click="Create">
                                    Add New Account
                                </button>
                            </div>

                            <div class="flex justify-between items-center my-5">
                                <div class="grid grid-cols-12 gap-3 p-6">
                                    <div class="col-span-4">
                                        <select id="status" v-model=fattr
                                            class="mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 sm:text-sm">
                                            <option value="IDTAIKHOAN">
                                                Account ID
                                            </option>
                                            <option value="TENDANGNHAP">
                                                Username
                                            </option>
                                            <option value="PSW">
                                                Password
                                            </option>
                                            <option value="VAITRO">
                                                Role
                                            </option>
                                            <option value="IDSINHVIEN">
                                                Student ID
                                            </option>
                                            <option value="DA4PAGE">
                                                A4 Paper
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
                                                    Delete(item.IDTAIKHOAN)
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
    <div id="TaiKhoanModal" tabindex="-1" aria-hidden="true"
                class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative w-full max-w-2xl max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow">
                        <!-- Modal header -->
                        <div class="bg-blue-700 flex items-start justify-between p-4 border-b rounded-t">
                            <h3 class="text-xl font-semibold text-white">
                                {{ TaiKhoanModal.txtTitle }}
                            </h3>
                        </div>

                        <!-- Modal body -->
                        <div class="grid grid-cols-12 gap-3 p-6">
                            <div class="col-span-6">
                                <Inputa label="Account ID" type="text" placeholder="TKxxxxxx"
                                    v-model="TaiKhoanModal.dataTaiKhoan.IDTAIKHOAN" />
                            </div>
                            <div class="col-span-6">
                                <Inputa label="Username" type="text" placeholder=""
                                    v-model="TaiKhoanModal.dataTaiKhoan.TENDANGNHAP" />
                            </div>
                            <div class="col-span-6">
                                <Inputa label="Password" type="text" placeholder=""
                                    v-model="TaiKhoanModal.dataTaiKhoan.PWD" />
                            </div>
                            <div class="col-span-6">
                                <Inputa label="Role" type="text" placeholder=""
                                    v-model="TaiKhoanModal.dataTaiKhoan.VAITRO" />
                            </div>

                            <div class="col-span-6">
                                <Inputa label="Student ID" type="text" placeholder=""
                                    v-model="TaiKhoanModal.dataTaiKhoan.IDSINHVIEN" />
                            </div>

                            <div class="col-span-6">
                                <Inputa label="A4 Papers" type="text" placeholder=""
                                    v-model="TaiKhoanModal.dataTaiKhoan.DA4PAGE" />
                            </div>
                        </div>

                        <!-- Modal footer -->
                        <div class="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b">
                            <button @click="Close" type="button"
                                class="text-gray-700 hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Close
                            </button>

                            <button @click="Submit" type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
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
            const res = await axios.get("/taikhoan");
            this.TaiKhoans = await res.data.map((item) => {
                return item;
            });
        },
        Create() {
            this.modal.toggle();
            this.TaiKhoanModal = {
                txtTitle: "Add New Account",
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
                txtTitle: "Edit Account",
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
