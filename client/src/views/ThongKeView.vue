<script setup>
import Inputa from "../components/InputField.vue";
import Navigation from "../components/Navigation.vue";
</script>

<template>
    <div>
        <div class="container mx-auto w-screen h-screen">
            <Navigation />
        </div>
        <div class="grid grid-cols-12 gap-3 p-6">
            <div class="col-span-4">
                <Inputa label="Mã khoa" type="text" placeholder="Nhập mã khoa" v-model="keyword" />
            </div>
            <div class="col-span-6 mt-7">
                <button @click="Calculate" type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Calculate
                </button>
            </div>
            <div class="col-span-4">
                <Inputa read-only="true" label="Điểm trung bình đề tài theo khoa" type="number" placeholder=""
                    v-model="diemtb" />
            </div>
            <div class="col-span-4">
                <Inputa read-only="true" label="Lương trung bình giáo viên theo khoa" type="text" placeholder=""
                    v-model="luongtb" />
            </div>
            <div class="col-span-4">
                <Inputa read-only="true" label="Số lượng đề tài của khoa" type="number" placeholder="" v-model="sldt" />
            </div>
        </div>
        <div class="relative overflow-x-auto mt-5">
            <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-center text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">Mã Đề Tài</th>
                        <th scope="col" class="px-6 py-3">Tên Đề Tài</th>
                        <th scope="col" class="px-6 py-3">Kết Quả</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in detai" class="bg-white border-b">
                        <td class="px-6 py-4 text-center">
                            <p class="font-bold">{{ item[0] }}</p>
                        </td>
                        <td class="px-6 py-4">
                            <p class="font-bold">{{ item[1] }}</p>
                        </td>
                        <td class="px-6 py-4 text-center">
                            {{ item[2] }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "../fetch/axios";

export default {
    // props: [],
    name: "statistic",
    data() {
        return {
            luongtb: 0,
            diemtb: 0,
            sldt: 0,
            keyword: "",
            detai: [],
        };
    },
    methods: {
        formatMoney(value) {
            return value
                ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : null;
        },
        async Calculate() {
            const dsdt = await axios.get(`/statistic/danhsachkqdt/${this.keyword}`);
            const demo = dsdt.data.map((item) => item.dskq);
            this.detai = demo[0].split(";");
            for (let i = 0; i < this.detai.length; i++) {
                this.detai[i] = this.detai[i].split(":");
            }
            const luong = await axios.get(`/statistic/luongtb/${this.keyword}`);
            const diem = await axios.get(`/statistic/diemtb/${this.keyword}`);
            const sldt = await axios.get(`/statistic/sldt/${this.keyword}`);
            this.sldt = sldt.data.map((item) => item.sldt);
            this.luongtb = this.formatMoney(parseInt(luong.data.map((item) => item.luongtb))) + " VNĐ";
            this.diemtb = diem.data.map((item) => item.diemtb);
            if (this.luongtb == 0 || this.diemtb == 0) {
                alert("Invalid maKhoa");
            }

            //console.log(diem.data);
        },
    },
};
</script>
