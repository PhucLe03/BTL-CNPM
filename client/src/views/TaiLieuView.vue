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
                            Document Management
                        </h1>

                        <div>
                            <nav>
                                <ol class="flex items-center gap-2">
                                    <li><a href="index.html">Dashboard /</a></li>
                                    <li class="text-primary">Document Management</li>
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
                                    Document List
                                </h4>
                                <button class="px-5 p-1.5 rounded bg-green-700 font-bold text-white mt-0" type="button"
                                    @click="Create">
                                    Add New Document
                                </button>
                            </div>

                            <div class="flex justify-between items-center my-5">
                                <div class="grid grid-cols-12 gap-3 p-6">
                                    <div class="col-span-4">
                                        <select id="status" v-model=fattr
                                            class="mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 sm:text-sm">
                                            <option value="IDTHUCHIEN">
                                                Transaction ID
                                            </option>
                                            <option value="SOTRANG">
                                                Page
                                            </option>
                                            <option value="TENFILE">
                                                Document Name
                                            </option>
                                            <option value="LOAIFILE">
                                                Document Type
                                            </option>
                                            <option value="LOAIGIAY">
                                                Paper Type
                                            </option>
                                            <option value="SOBANCOPY">
                                                Number of Copies
                                            </option>
                                            <option value="TONGSOTRANG">
                                                Total Pages
                                            </option>
                                            <option value="IDTAIKHOAN">
                                                Account ID
                                            </option>
                                            <option value="IDMAYIN">
                                                Printer ID
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
                                            <th scope="col" class="px-6 py-3" @click="sortBy('IDTHUCHIEN')">IDTHUCHIEN</th>
                                            <th scope="col" class="px-6 py-3" @click="sortBy('TENFILE')">TENFILE</th>
                                            <th scope="col" class="px-6 py-3" @click="sortBy('SOTRANG')">SOTRANG</th>
                                            <th scope="col" class="px-6 py-3" @click="sortBy('LOAIFILE')">LOAIFILE</th>
                                            <th scope="col" class="px-6 py-3" @click="sortBy('LOAIGIAY')">LOAIGIAY</th>
                                            <th scope="col" class="px-6 py-3" @click="sortBy('THOIGIANIN')">THOIGIANIN</th>
                                            <th scope="col" class="px-6 py-3" @click="sortBy('THOIGIANNHAN')">THOIGIANNHAN
                                            </th>
                                            <th scope="col" class="px-6 py-3" @click="sortBy('SOBANCOPY')">SOBANCOPIES</th>
                                            <th scope="col" class="px-6 py-3" @click="sortBy('TONGSOTRANG')">TONGSOTRANG
                                            </th>
                                            <th scope="col" class="px-6 py-3" @click="sortBy('IDTAIKHOAN')">IDTAIKHOAN</th>
                                            <th scope="col" class="px-6 py-3" @click="sortBy('IDMAYIN')">IDMAYIN</th>
                                            <th scope="col" class="w-60"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in TaiLieus" class="bg-white border-b">
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
                                                    {{ item.IDTAIKHOAN }}
                                                </p>
                                            </td>
                                            <td class="px-6 py-4">
                                                <p>
                                                    {{ item.IDMAYIN }}
                                                </p>
                                            </td>

                                            <td class="px-6 py-4 flex justify-center gap-2">
                                                <button @click="Detail(item)"
                                                    class="px-4 py-1 rounded bg-cyan-700 text-white font-bold">
                                                    Chi tiết
                                                </button>
                                                <button @click="Update(item)"
                                                    class="px-4 py-1 rounded bg-cyan-700 text-white font-bold">
                                                    Chỉnh sửa
                                                </button>
                                                <button @click="Delete(item.IDTHUCHIEN)"
                                                    class="px-4 py-1 rounded bg-red-800 text-white font-bold">
                                                    Xóa
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

            <div id="TaiLieuModal" tabindex="-1" aria-hidden="true"
                class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative w-full max-w-2xl max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow">
                        <!-- Modal header -->
                        <div class="bg-blue-500 flex items-start justify-between p-4 border-b rounded-t">
                            <h3 class="text-xl font-semibold text-gray-900">
                                {{ TaiLieuModal.txtTitle }}
                            </h3>
                        </div>

                        <!-- Modal body -->
                        <div class="grid grid-cols-12 gap-3 p-6">
                            <div class="col-span-12">
                                <Inputa label="id" type="text" placeholder=""
                                    v-model="TaiLieuModal.dataTaiLieu.IDTHUCHIEN" />
                            </div>
                            <div class="col-span-6">
                                <Inputa label="ten file" type="text" placeholder=""
                                    v-model="TaiLieuModal.dataTaiLieu.TENFILE" />
                            </div>
                            <div class="col-span-6">
                                <Inputa label="so trang" type="number" placeholder=""
                                    v-model="TaiLieuModal.dataTaiLieu.SOTRANG" />
                            </div>
                            <div class="col-span-6">
                                <Inputa label="loai file" type="text" placeholder=""
                                    v-model="TaiLieuModal.dataTaiLieu.LOAIFILE" />
                            </div>
                            <div class="col-span-6">
                                <Inputa label="loai giay" type="text" placeholder=""
                                    v-model="TaiLieuModal.dataTaiLieu.LOAIGIAY" />
                            </div>
                            <div class="col-span-6">
                                <Inputa label="thoigianin" type="datetime-local" placeholder=""
                                    v-model="TaiLieuModal.dataTaiLieu.THOIGIANIN" />
                            </div>
                            <div class="col-span-6">
                                <Inputa label="thoigiannhan" type="datetime-local" placeholder=""
                                    v-model="TaiLieuModal.dataTaiLieu.THOIGIANNHAN" />
                            </div>
                            <div class="col-span-6">
                                <Inputa label="sobancopy" type="number" placeholder=""
                                    v-model="TaiLieuModal.dataTaiLieu.SOBANCOPY" />
                            </div>
                            <div class="col-span-6">
                                <Inputa label="tongsotrang" read-only="true" type="number" placeholder=""
                                    v-model="TaiLieuModal.dataTaiLieu.TONGSOTRANG" />
                            </div>
                            <div class="col-span-6">
                                <Inputa label="idtaikhoan" type="text" placeholder=""
                                    v-model="TaiLieuModal.dataTaiLieu.IDTAIKHOAN" />
                            </div>
                            <div class="col-span-6">
                                <Inputa label="idmayin" type="text" placeholder=""
                                    v-model="TaiLieuModal.dataTaiLieu.IDMAYIN" />
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
import moment from "moment";

export default {
    name: "TaiLieus",
    data() {
        return {
            sortKey: '',
            sortOrders: {
                IDTHUCHIEN: 1,
                TENFILE: 1,
                SOTRANG: 1,
                LOAIFILE: 1,
                LOAIGIAY: 1,
                THOIGIANIN: 1,
                THOIGIANNHAN: 1,
                SOBANCOPY: 1,
                TONGSOTRANG: 1,
                IDTAIKHOAN: 1,
                IDMAYIN: 1,
            },
            keyword: "",
            fattr: "",
            TaiLieus: [],
            TaiLieuModal: {
                txtTitle: "",
                submitType: null,
                dataTaiLieu: {
                    IDTHUCHIEN: null,
                    TENFILE: null,
                    SOTRANG: 0,
                    LOAIFILE: null,
                    LOAIGIAY: null,
                    THOIGIANIN: null,
                    THOIGIANNHAN: null,
                    SOBANCOPY: 0,
                    TONGSOTRANG: null,
                    IDTAIKHOAN: null,
                    IDMAYIN: null,
                },
            },
            modal: null,
        };
    },
    mounted() {
        this.getTaiLieus();
        this.modal = new Modal(document.querySelector("#TaiLieuModal"));
    },
    methods: {
        sortBy(key) {
            this.sortKey = key;
            this.TaiLieus.sort((a, b) => {
                const x = a[key];
                const y = b[key];
                const order = this.sortOrders[key] || 1;

                if (x < y) return order;
                if (x > y) return -order;
                return 0;
            });
            this.sortOrders[key] = this.sortOrders[key] * -1;
        },
        async getTaiLieus() {
            const res = await axios.get("/tailieu");
            this.TaiLieus = await res.data.map((item) => {
                item.THOIGIANIN = moment(item.THOIGIANIN, "YYYY/MM/DD hh:mm").format("DD/MM/YYYY hh:mm");
                item.THOIGIANNHAN = moment(item.THOIGIANNHAN, "YYYY/MM/DD hh:mm").format("DD/MM/YYYY hh:mm");
                return item;
            });
        },
        Create() {
            this.modal.toggle();
            this.TaiLieuModal = {
                txtTitle: "Thêm mới Tai Lieu",
                submitType: "create",
                dataTaiLieu: {
                    IDTHUCHIEN: null,
                    TENFILE: null,
                    SOTRANG: 0,
                    LOAIFILE: null,
                    LOAIGIAY: null,
                    THOIGIANIN: null,
                    THOIGIANNHAN: null,
                    SOBANCOPY: 0,
                    TONGSOTRANG: 0,//TaiLieuModal.dataTaiLieu.LOAIGIAY == "A4" ? TaiLieuModal.dataTaiLieu.SOBANCOPY * TaiLieuModal.dataTaiLieu.SOTRANG : TaiLieuModal.dataTaiLieu.SOBANCOPY * TaiLieuModal.dataTaiLieu.SOTRANG * 2,
                    IDTAIKHOAN: null,
                    IDMAYIN: null,
                },
            };
        },
        async Update(TaiLieuItem) {
            this.modal.toggle();

            this.TaiLieuModal = {
                txtTitle: "Chỉnh sửa Máy In",
                submitType: "update",
                dataTaiLieu: {
                    IDTHUCHIEN: TaiLieuItem.IDTHUCHIEN,
                    TENFILE: TaiLieuItem.TENFILE,
                    SOTRANG: TaiLieuItem.SOTRANG,
                    LOAIFILE: TaiLieuItem.LOAIFILE,
                    LOAIGIAY: TaiLieuItem.LOAIGIAY,
                    THOIGIANIN: moment(TaiLieuItem.THOIGIANIN).format('YYYY-MM-DDThh:mm'),
                    THOIGIANNHAN: moment(TaiLieuItem.THOIGIANNHAN).format('YYYY-MM-DDThh:mm'),
                    SOBANCOPY: TaiLieuItem.SOBANCOPY,
                    TONGSOTRANG: TaiLieuItem.SOBANCOPY * TaiLieuItem.SOTRANG,//TaiLieuItem.LOAIGIAY == "A4" ? TaiLieuItem.SOBANCOPY * TaiLieuItem.SOTRANG : TaiLieuItem.SOBANCOPY * TaiLieuItem.SOTRANG * 2,
                    IDTAIKHOAN: TaiLieuItem.IDTAIKHOAN,
                    IDMAYIN: TaiLieuItem.IDMAYIN,
                },
            };
        },
        async Submit() {
            const submitType = this.TaiLieuModal.submitType;
            const data = this.TaiLieuModal.dataTaiLieu;

            if (submitType === "create") {
                await axios.post("tailieu/store", data);
            } else {
                await axios.put(`tailieu/update`, data);
            }
            await this.getTaiLieus();
            this.modal.hide();
        },
        async Delete(id) {
            await axios.delete(`tailieu/delete/${id}`);
            await this.getTaiLieus();
        },
        async Find() {
            const res = await axios.get(`/tailieu/find/${this.fattr}/${this.keyword}`);
            this.TaiLieus = await res.data[0].map((item) => {
                item.THOIGIANIN = moment(item.THOIGIANIN, "YYYY/MM/DD hh:mm").format("DD/MM/YYYY hh:mm");
                item.THOIGIANNHAN = moment(item.THOIGIANNHAN, "YYYY/MM/DD hh:mm").format("DD/MM/YYYY hh:mm");
                return item;
            });
        },

    },
};
</script>
