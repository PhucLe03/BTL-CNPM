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
                            Statistics
                        </h1>

                        <div>
                            <nav>
                                <ol class="flex items-center gap-2">
                                    <li><a href="index.html">Dashboard /</a></li>
                                    <li class="text-primary">Statistics</li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                    <!-- ------------------------------------------------- -->


                    <div class="grid grid-cols-12 gap-3 p-6">
                        <div class="col-span-4">
                            <Inputa label="Ngay bat dau" type="datetime-local" placeholder="" v-model="start" />
                        </div>
                        <div class="col-span-4">
                            <Inputa label="Ngay ket thuc" type="datetime-local" placeholder="" v-model="end" />
                        </div>
                        <div class="col-span-4 mt-7">
                            <button @click="Export" type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Export
                            </button>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    </div>
</template>


<script>
import moment from 'moment';
import axios from "../fetch/axios";
import * as XLSX from 'xlsx';

export default {
    // props: [],
    name: "statistic",
    data() {
        return {
            start: "",
            end: "",
        };
    },
    methods: {
        async Export() {
            this.start = moment(this.start, "YYYY-MM-DDThh:mm").format("YYYY-MM-DD hh:mm:ss");
            this.end = moment(this.end, "YYYY-MM-DDThh:mm").format("YYYY-MM-DD hh:mm:ss");

            const res = await axios.post(
                `/thongke/export`,
                {
                    start: this.start,
                    end: this.end,
                },
                {
                    responseType: 'blob',
                },
            ).then(response => {
                const url = URL.createObjectURL(new Blob([response.data], {
                    type: 'application/vnd.ms-excel'
                }))
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', 'thongke.xlsx')
                document.body.appendChild(link)
                link.click()
            });
        },
    },
};
</script>
