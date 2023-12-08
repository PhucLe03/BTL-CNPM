<script setup>
import Inputa from "../components/InputField.vue";
import Navigation from "../components/UserNavigation.vue";
</script>

<template>
    <div>
        <div>
            <Navigation />
        </div>
        <div class="container mx-auto mt-8">
            <div class="max-w-md mx-auto bg-white rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Account Details</div>
                    <div>
                        <span class="text-gray-700">Username:</span> {{ this.account.TENDANGNHAP }}
                    </div>
                    <div>
                        <span class="text-gray-700">Password:</span> {{ this.account.PWD }}
                    </div>
                    <div>
                        <span class="text-gray-700">Role:</span> {{ this.account.VAITRO }}
                    </div>
                    <div>
                        <span class="text-gray-700">Student ID:</span> {{ this.account.IDSINHVIEN }}
                    </div>
                    <div>
                        <span class="text-gray-700">Remaining A4:</span> {{ this.account.DA4PAGE }}
                    </div>
                    <!-- Add more details as needed -->
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center my-5">
            <div class="grid grid-cols-12 gap-3 p-6">
                <div class="col-span-4">
                    <Inputa label="" type="number" placeholder="Số Trang muốn mua" v-model="pages" />
                </div>
                <div class="col-span-4 text-center">
                    <button @click="Buy" type="button"
                        class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Buy
                    </button>
                </div>
            </div>
        </div>
        <div class="relative overflow-x-auto mt-5">
            <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-center text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3" @click="sortBy('IDTHUCHIEN')">IDTHUCHIEN</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('TENFILE')">TENFILE</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('SOTRANG')">SOTRANG</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('LOAIFILE')">LOAIFILE</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('LOAIGIAY')">LOAIGIAY</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('THOIGIANIN')">THOIGIANIN</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('THOIGIANNHAN')">THOIGIANNHAN</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('SOBANCOPY')">SOBANCOPIES</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('TONGSOTRANG')">TONGSOTRANG</th>
                        <th scope="col" class="px-6 py-3" @click="sortBy('IDMAYIN')">IDMAYIN</th>
                        <th scope="col" class="w-60"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in tailieus" class="bg-white border-b">
                        <td class="px-6 py-4">
                            <p class="font-bold">{{ item.IDTHUCHIEN }}</p>
                        </td>
                        <td class="px-6 py-4">
                            <p class="font-bold">{{ item.TENFILE }}</p>
                        </td>
                        <td class="px-6 py-4">
                            {{ item.SOTRANG }}
                        </td>
                        <td class="px-6 py-4">
                            <p>{{ item.LOAIFILE }}</p>
                        </td>
                        <td class="px-6 py-4">
                            <p>
                                {{ item.LOAIGIAY }}
                            </p>
                        </td>
                        <td class="px-6 py-4">
                            <p>
                                {{ item.THOIGIANIN }}
                            </p>
                        </td>
                        <td class="px-6 py-4">
                            <p>
                                {{ item.THOIGIANNHAN }}
                            </p>
                        </td>
                        <td class="px-6 py-4">
                            <p>
                                {{ item.SOBANCOPY }}
                            </p>
                        </td>
                        <td class="px-6 py-4">
                            <p>
                                {{ item.TONGSOTRANG }}
                            </p>
                        </td>
                        <td class="px-6 py-4">
                            <p>
                                {{ item.IDMAYIN }}
                            </p>
                        </td>

                        <td class="px-6 py-4 flex justify-center gap-2">
                            <button @click="Detail(item)" class="px-4 py-1 rounded bg-cyan-700 text-white font-bold">
                                Chi tiết
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="paymentModal" tabindex="-1" aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow">
                    <!-- Modal header -->
                    <div class="bg-blue-500 flex items-start justify-between p-4 border-b rounded-t">
                        <h3 class="text-xl font-semibold text-gray-900">
                            {{ paymentModal.txtTitle }}
                        </h3>
                    </div>

                    <!-- Modal body -->
                    <div class="grid grid-cols-12 gap-3 p-6">
                        <div class="col-span-6">
                            <Inputa label="ID" type="number" placeholder="" v-model="paymentModal.dataPayment.pages" />
                        </div>
                        <div class="col-span-6">
                            <button @click="Update" type="button"
                                class="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Cập nhật
                            </button>
                        </div>
                        <div class="col-span-6">
                            <Inputa label="ID" :read-only="true" type="text" placeholder=""
                                v-model="paymentModal.dataPayment.total" />
                        </div>
                    </div>

                    <!-- Modal footer -->
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                        <button @click="Checkout" type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Thanh toán
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "../fetch/axios";
import moment from "moment";
import { Modal } from "flowbite";
import * as Vue from 'vue';

export default {
    name: "MyTaiKhoanView",
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
            account: {
                IDTAIKHOAN: "",
                TENDANGNHAP: "",
                PWD: "",
                VAITRO: "",
                IDSINHVIEN: "",
                DA4PAGE: 0,
                TAILIEUS: [],
            },
            tailieus: [],
            paymentModal: {
                txtTitle: "Thanh Toan",
                submitType: "thanh toan",
                dataPayment: {
                    pages: 0,
                    total: 0,
                },
            },
            modal: null,
        };
    },
    async mounted() {

        await this.getAccount();
        await this.getTaiLieusOnIdTaiKhoan();
        this.modal = new Modal(document.querySelector("#paymentModal"));

    },
    methods: {
        sortBy(key) {
            this.sortKey = key;
            this.tailieus.sort((a, b) => {
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
        async getAccount() {
            const res = await axios.get(`/taikhoan/find/TK000002`);
            this.account = res.data.map((item) => {
                return {
                    IDTAIKHOAN: item.IDTAIKHOAN,
                    TENDANGNHAP: item.TENDANGNHAP,
                    PWD: item.PWD,
                    VAITRO: item.VAITRO,
                    IDSINHVIEN: item.IDSINHVIEN,
                    DA4PAGE: item.DA4PAGE,
                }
            })[0];
        },
        async getTaiLieusOnIdTaiKhoan() {
            const res = await axios.get(`/tailieu/findbytk/${localStorage.getItem('id')}`);
            this.tailieus = res.data.map((item) => {
                return {
                    IDTHUCHIEN: item.IDTHUCHIEN,
                    TENFILE: item.TENFILE,
                    SOTRANG: item.SOTRANG,
                    LOAIFILE: item.LOAIFILE,
                    LOAIGIAY: item.LOAIGIAY,
                    THOIGIANIN: moment(item.THOIGIANIN, "YYYY/MM/DD hh:mm").format("DD/MM/YYYY hh:mm"),
                    THOIGIANNHAN: moment(item.THOIGIANNHAN, "YYYY/MM/DD hh:mm").format("DD/MM/YYYY hh:mm"),
                    SOBANCOPY: item.SOBANCOPY,
                    TONGSOTRANG: item.TONGSOTRANG,
                    IDTAIKHOAN: item.IDTAIKHOAN,
                    IDMAYIN: item.IDMAYIN,
                };
            });
        },
        async Buy() {
            this.modal.toggle();
            this.paymentModal.dataPayment.pages = this.pages;
            this.paymentModal.dataPayment.total = this.paymentModal.dataPayment.pages * 500;
        },
        Update() {
            this.paymentModal.dataPayment.total = this.paymentModal.dataPayment.pages * 500;
        },
        async Checkout() {
            //
        },
    },
};
</script>
