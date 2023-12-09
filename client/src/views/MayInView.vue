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

        <div
            class="flex flex-col flex-1 relative overflow-x-hidden overflow-y-auto"
        >
            <div>
                <Header />
            </div>

            <main>
                <div
                    class="max-w-screen-2xl mx-auto p-4 md:p-6 2xl:p-10 bg-gray-100"
                >
                    <!-- ------ -->
                    <div
                        class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6"
                    >
                        <h1 class="text-2xl uppercase font-bold">
                            Printer Management
                        </h1>

                        <div>
                            <nav>
                                <ol class="flex items-center gap-2">
                                    <li><a href="index.html">Dashboard /</a></li>
                                    <li class="text-primary">Printer Management</li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                    <!-- ------------------------------------------------- -->


                    <div class="flex flex-col gap-10">
                        <!-- Printer List -->
                        <div
                            class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow sm:px-7.5 xl:pb-1"
                        >
                        <div class="flex justify-between items-center">
                            <h4 class="mb-6 text-xl font-bold text-black uppercase">
                                Printer List
                            </h4>
                        
                            <button class="px-5 p-1.5 rounded bg-green-700 font-bold text-white mt-0" type="button" @click="Create">
                                Add New Printer
                            </button>
                        </div>

                            <div class="flex justify-between items-center my-5">
                                <div class="grid grid-cols-12 gap-3 p-6">
                                    <div class="col-span-4">
                                        <select
                                            id="status"
                                            class="mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 sm:text-sm"
                                        >
                                            <option value="not_available">
                                                Printer ID
                                            </option>
                                            <option value="available">
                                                Location ID
                                            </option>
                                            <option value="available">
                                                Printer name
                                            </option>
                                            <option value="available">
                                                Model
                                            </option>
                                            <option value="available">
                                                Description
                                            </option>
                                            <option value="available">
                                                Status
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-span-4">
                                        <Inputa
                                            label=""
                                            type="text"
                                            placeholder="Keyword"
                                            v-model="keyword"
                                        />
                                    </div>
                                    <div class="col-span-3 text-center">
                                        <button
                                            @click="Find"
                                            type="button"
                                            class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="relative overflow-x-auto mt-5">
                                <table
                                    class="w-full text-sm text-left text-gray-500"
                                >
                                    <thead
                                        class="text-center font-medium text-sm text-gray-700 uppercase bg-gray-100 xsm:text-base"
                                    >
                                        <tr>
                                            <th
                                                scope="col"
                                                class="px-6 py-3"
                                                @click="sortBy('IDMAYIN')"
                                            >
                                                Printer ID
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-6 py-3"
                                                @click="sortBy('IDVITRI')"
                                            >
                                                Location ID
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-6 py-3"
                                                @click="sortBy('TENMAYIN')"
                                            >
                                                Printer Name
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-6 py-3"
                                                @click="sortBy('MODEL')"
                                            >
                                                model
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-6 py-3"
                                                @click="sortBy('MOTA')"
                                            >
                                                Description
                                            </th>
                                            <th
                                                scope="col"
                                                class="px-6 py-3"
                                                @click="sortBy('TINHTRANG')"
                                            >
                                                Status
                                            </th>
                                            <th scope="col" class="w-60"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="item in MayIns"
                                            class="bg-white border-b"
                                        >
                                            <td class="text-center">
                                                <p class="font-bold">
                                                    {{ item.IDMAYIN }}
                                                </p>
                                            </td>
                                            <td class="text-center">
                                                <p class="font-bold">
                                                    {{ item.IDVITRI }}
                                                </p>
                                            </td>
                                            <td
                                                class="text-center flex-shrink-0"
                                            >
                                                <img
                                                    src="../images/printer (2).svg"
                                                    alt="Brand"
                                                    style="
                                                        vertical-align: middle;
                                                        display: inline-block;
                                                        width: 40px;
                                                    "
                                                />
                                                {{ item.TENMAYIN }}
                                            </td>
                                            <td class="text-center">
                                                <p>{{ item.MODEL }}</p>
                                            </td>
                                            <td class="px-6 py-4">
                                                <p>
                                                    {{ item.MOTA }}
                                                </p>
                                            </td>
                                            <td class="text-center">
                                                <p>
                                                    {{ item.TINHTRANG }}
                                                </p>
                                            </td>

                                            <td
                                                class="px-6 py-4 flex justify-center gap-2"
                                            >
                                                <button
                                                    @click="Detail(item)"
                                                    class="px-4 py-1 rounded bg-cyan-700 text-white font-bold"
                                                >
                                                    Detail
                                                </button>
                                                <button
                                                    @click="Update(item)"
                                                    class="px-4 py-1 rounded bg-yellow-600 text-white font-bold"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    @click="
                                                        Delete(item.IDMAYIN)
                                                    "
                                                    class="px-4 py-1 rounded bg-red-800 text-white font-bold"
                                                >
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

            <div
                id="MayInModal"
                tabindex="-1"
                aria-hidden="true"
                class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div class="relative w-full max-w-2xl max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow">
                        <!-- Modal header -->
                        <div class="bg-blue-700 flex items-center justify-start p-4 border-b rounded-t">
                        
                            <h3 class="text-xl font-semibold text-white">
                                {{ MayInModal.txtTitle }}
                            </h3>
                        </div>
                        

                        <!-- Modal body -->
                        <div class="grid grid-cols-12 gap-3 p-6">
                            <div class="col-span-12">
                                <Inputa
                                    label="Printer ID"
                                    type="text"
                                    placeholder="MAYxxx"
                                    v-model="MayInModal.dataMayIn.IDMAYIN"
                                />
                            </div>
                            <div class="col-span-6">
                                <Inputa
                                    label="Location ID"
                                    type="text"
                                    placeholder="VTxxx"
                                    v-model="MayInModal.dataMayIn.IDVITRI"
                                />
                            </div>
                            <div class="col-span-6">
                                <Inputa
                                    label="Printer Name"
                                    type="text"
                                    placeholder=""
                                    v-model="MayInModal.dataMayIn.TENMAYIN"
                                />
                            </div>
                            <div class="col-span-6">
                                <Inputa
                                    label="Model"
                                    type="text"
                                    placeholder=""
                                    v-model="MayInModal.dataMayIn.MODEL"
                                />
                            </div>
                            <div class="col-span-6">
                                <Inputa
                                    label="Description"
                                    type="text"
                                    placeholder=""
                                    v-model="MayInModal.dataMayIn.MOTA"
                                />
                            </div>
                            <div class="col-span-6">
                                <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
                                <select
                                    id="status"
                                    v-model="MayInModal.dataMayIn.TINHTRANG"
                                    class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 sm:text-sm"
                                >
                                    <option value="not_available">Not Available</option>
                                    <option value="available">Available</option>
                                </select>
                            </div>

                        </div>

                        <!-- Modal footer -->
                        <div class="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b">
                            <button
                                @click="Close"
                                type="button"
                                class="text-gray-700 hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Close
                            </button>
                        
                            <button
                                @click="Submit"
                                type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="ChiTietMayIn"
                tabindex="-1"
                aria-hidden="true"
                class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div class="relative w-full max-w-2xl max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow">
                        <!-- Modal header -->
                        <div
                            class="bg-blue-700 flex items-start justify-between p-4 border-b rounded-t"
                        >
                            <h3 class="text-xl font-semibold text-white">
                                {{ ChiTietMayIn.txtTitle }}
                            </h3>
                        </div>

                        <!-- Modal body -->
                        <div class="grid grid-cols-12 gap-3 p-6">
                            <div class="col-span-12">
                                <Inputa
                                    label="Printer ID"
                                    type="text"
                                    placeholder=""
                                    v-model="ChiTietMayIn.dataMayIn.IDMAYIN"
                                />
                            </div>
                            <div class="col-span-6">
                                <Inputa
                                    label="Location ID"
                                    type="text"
                                    placeholder=""
                                    v-model="ChiTietMayIn.dataMayIn.IDVITRI"
                                />
                            </div>
                            <div class="col-span-6">
                                <Inputa
                                    label="Printer Name"
                                    type="text"
                                    placeholder=""
                                    v-model="ChiTietMayIn.dataMayIn.TENMAYIN"
                                />
                            </div>
                            <div class="col-span-6">
                                <Inputa
                                    label="Model"
                                    type="text"
                                    placeholder=""
                                    v-model="ChiTietMayIn.dataMayIn.MODEL"
                                />
                            </div>
                            <div class="col-span-6">
                                <Inputa
                                    label="Description"
                                    type="text"
                                    placeholder=""
                                    v-model="ChiTietMayIn.dataMayIn.MOTA"
                                />
                            </div>
                            <div class="col-span-6">
                                <Inputa
                                    label="Status"
                                    type="text"
                                    placeholder=""
                                    v-model="ChiTietMayIn.dataMayIn.TINHTRANG"
                                />
                            </div>
                            <div class="col-span-6">
                                <Inputa
                                    label="Image"
                                    type="text"
                                    placeholder=""
                                    v-model="ChiTietMayIn.dataMayIn.HINHANH"
                                />
                            </div>
                            <div class="col-span-6">
                                <Inputa
                                    label="Facility"
                                    type="text"
                                    placeholder=""
                                    v-model="ChiTietMayIn.dataMayIn.COSO"
                                />
                            </div>
                            <div class="col-span-6">
                                <Inputa
                                    label="Bulding"
                                    type="text"
                                    placeholder=""
                                    v-model="ChiTietMayIn.dataMayIn.TOA"
                                />
                            </div>
                            <div class="col-span-6">
                                <Inputa
                                    label="Room"
                                    type="text"
                                    placeholder=""
                                    v-model="ChiTietMayIn.dataMayIn.PHONG"
                                />
                            </div>
                        </div>
                        <!-- Modal footer -->
                        <div class="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b">

                        
                            <button
                                @click="Close"
                                type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Close
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
    name: "MayIns",
    data() {
        return {
            sortKey: "",
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
                txtTitle: "Printer Detail",
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
                },
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
                txtTitle: "Add New Printer",
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
                txtTitle: "Edit Printer",
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
                console.log(data);
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
            const res = await axios.get(
                `/mayin/find/${this.fattr}/${this.keyword}`
            );
            this.MayIns = await res.data[0].map((item) => {
                return item;
            });
        },
    },
};
</script>
