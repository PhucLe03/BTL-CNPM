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
                        <th scope="col" class="px-6 py-3">id taikhoan</th>
                        <th scope="col" class="px-6 py-3">tendangnhap</th>
                        <th scope="col" class="px-6 py-3">matkhau</th>
                        <th scope="col" class="px-6 py-3">vaitro</th>
                        <th scope="col" class="px-6 py-3">idsinhvien</th>
                        <th scope="col" class="px-6 py-3">A4 con lai</th>
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
                            <button @click="Delete(item.stt)" class="px-4 py-1 rounded bg-red-800 text-white font-bold">
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
                            <Inputa label="STT" type="text" placeholder="số thứ tự" v-model="TaiKhoanModal.dataTaiKhoan.stt"
                                read-only="true" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="Mã học kì" type="text" placeholder="Nhập mã học kì"
                                v-model="TaiKhoanModal.dataTaiKhoan.maHK" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="Mã khoa" type="text" placeholder="Nhập mã khoa"
                                v-model="TaiKhoanModal.dataTaiKhoan.maKhoa" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="Phòng" type="text" placeholder="Nhập phòng"
                                v-model="TaiKhoanModal.dataTaiKhoan.phong" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="Checkin Time" type="datetime" placeholder="ex: 2001/01/01 00:00:00"
                                v-model="this.TaiKhoanModal.dataTaiKhoan.checkInTime" />
                        </div>
                        <div class="col-span-6">
                            <Inputa label="Checkout Time" type="datetime" placeholder="ex: 2001/01/01 00:00:00"
                                v-model="this.TaiKhoanModal.dataTaiKhoan.checkOutTime" />
                        </div>

                        <div class="col-span-6">
                            <div class="bg-500 flex items-start justify-between p-4 border-b rounded-t">
                                <h3 class="text-xl font-semibold text-gray-900">
                                    Đề Tài
                                </h3>
                            </div>
                            <div>
                                <div class="col-span-12 mt-2 text-center">
                                    <button @click="addNewDeTai" type="button"
                                        class="mr-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                        Thêm
                                    </button>
                                    <button @click="deleteNewDeTai" type="button"
                                        class="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                        Xoá
                                    </button>
                                </div>
                            </div>
                            <div class="col-span-3 mt-2">
                                <div v-for="index in TaiKhoanModal.dataTaiKhoan.detaiCount" :key="index">
                                    <Inputa label="Mã Đề Tài" type="text" placeholder="Nhập mã đề tài"
                                        v-model="TaiKhoanModal.dataTaiKhoan.newdetais[index - 1]" />
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6">
                            <div class="bg-500 flex items-start justify-between p-4 border-b rounded-t">
                                <h3 class="text-xl font-semibold text-gray-900">
                                    Giảng Viên
                                </h3>
                            </div>
                            <div>
                                <div class="col-span-12 mt-2 text-center">
                                    <button @click="addNewGiangVien" type="button"
                                        class="mr-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                        Thêm
                                    </button>
                                    <button @click="deleteNewGiangVien" type="button"
                                        class="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                        Xoá
                                    </button>
                                </div>
                            </div>
                            <div class="col-span-3 mt-2">
                                <div v-for="index in TaiKhoanModal.dataTaiKhoan.giangvienCount" :key="index">
                                    <Inputa label="Mã Giảng Viên" type="text" placeholder="Nhập mã giảng viên"
                                        v-model="TaiKhoanModal.dataTaiKhoan.newgiangviens[index - 1]" />
                                </div>
                            </div>
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
            keyword: "",
            fattr: "",
            sattr: "",
            order: "",
            TaiKhoans: [],
            TaiKhoanModal: {
                txtTitle: "",
                submitType: null,
                dataTaiKhoan: {
                    stt: null,
                    maHK: null,
                    maKhoa: null,
                    phong: null,
                    checkInTime: null,
                    checkOutTime: null,
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
        formatDate(value) {
            return value ? moment(value).format("DD/MM/YYYY hh:mm") : null;
        },
        async getTaiKhoans() {
            const res = await axios.get("/TaiKhoan");
            this.TaiKhoans = await res.data[0].map((item) => {
                item.checkInTime = moment(item.checkInTime).format("YYYY/MM/DD hh:mm");
                item.checkOutTime = moment(item.checkOutTime).format("YYYY/MM/DD hh:mm");
                return item;
            });
        },
        Create() {
            this.modal.toggle();
            this.TaiKhoanModal = {
                txtTitle: "Thêm mới hội đồng",
                submitType: "create",
                dataTaiKhoan: {
                    maHK: null,
                    maKhoa: null,
                    phong: null,
                    checkInTime: null,
                    checkOutTime: null,
                    giangvienCount: 1,
                    newgiangviens: [],
                    detaiCount: 1,
                    newdetais: [],
                },
            };
        },
        async Update(TaiKhoanItem) {
            const detais = await axios.get(`/TaiKhoan/findDeTai/${TaiKhoanItem.stt}`);
            const giangviens = await axios.get(`/TaiKhoan/findGV/${TaiKhoanItem.stt}`);
            this.modal.toggle();
            this.TaiKhoanModal = {
                txtTitle: "Chỉnh sửa hội đồng",
                submitType: "update",
                dataTaiKhoan: {
                    stt: TaiKhoanItem.stt,
                    maHK: TaiKhoanItem.maHK,
                    maKhoa: TaiKhoanItem.maKhoa,
                    phong: TaiKhoanItem.phong,
                    checkInTime: TaiKhoanItem.checkInTime,
                    checkOutTime: TaiKhoanItem.checkOutTime,
                    giangvienCount: giangviens.data[0].length,
                    newgiangviens: giangviens.data[0].map(item => item.maGV),
                    detaiCount: detais.data[0].length,
                    newdetais: detais.data[0].map(item => item.maDeTai),

                },
            };
        },
        async Submit() {
            const submitType = this.TaiKhoanModal.submitType;
            const data = this.TaiKhoanModal.dataTaiKhoan;
            data.checkInTime = moment(data.checkInTime).format("YYYY-MM-DD hh:mm:ss");
            data.checkOutTime = moment(data.checkOutTime).format("YYYY-MM-DD hh:mm:ss");

            const gvs = await axios.get(`/giangvien`);
            const dts = await axios.get(`/detai`);

            const magvs = gvs.data[0].map(item => item.maGV);
            const madts = dts.data[0].map(item => item.maDeTai);

            for (let i = 0; i < data.newgiangviens.length; i++) {
                if (!magvs.includes(data.newgiangviens[i])) {
                    alert("Mã giảng viên không tồn tại");
                    return;
                }
            }

            for (let i = 0; i < data.newdetais.length; i++) {
                if (!madts.includes(data.newdetais[i])) {
                    alert("Mã đề tài không tồn tại");
                    return;
                }
            }

            if (data.giangvienCount > 3) {
                alert("So luong giang vien khong duoc vuot qua 3");
                return;
            }
            //console.log(data.checkInTime);
            if (submitType === "create") {
                await axios.post("TaiKhoan/store", data);
            } else {
                await axios.put(`TaiKhoan/update/${data.stt}`, data);
            }

            await this.getTaiKhoans();
            this.modal.hide();
        },
        async Delete(stt) {
            await axios.delete(`TaiKhoan/delete/${stt}`);
            await this.getTaiKhoans();
        },
        async Find() {
            const res = await axios.get(`/TaiKhoan/find/${this.fattr}/${this.keyword}`);
            this.TaiKhoans = await res.data[0].map((item) => {
                item.checkInTime = moment(item.checkInTime).format("DD/MM/YYYY hh:mm");
                item.checkOutTime = moment(item.checkOutTime).format("DD/MM/YYYY hh:mm");
                return item;
            });

            console.log(res.data);
        },
        async Sort() {
            const res = await axios.get(`/TaiKhoan/sort/${this.sattr}/${this.order}`);
            this.TaiKhoans = await res.data[0].map((item) => {
                item.checkInTime = moment(item.checkInTime).format("DD/MM/YYYY hh:mm");
                item.checkOutTime = moment(item.checkOutTime).format("DD/MM/YYYY hh:mm");
                return item;
            });

            console.log(res.data);
        },
        addNewGiangVien() {
            if (this.TaiKhoanModal.dataTaiKhoan.giangvienCount == 3) {
                alert("Hội đồng có tối đa 3 giảng viên")
                return;
            }
            this.TaiKhoanModal.dataTaiKhoan.giangvienCount++;
            this.TaiKhoanModal.dataTaiKhoan.newgiangviens.push("");
        },
        addNewDeTai() {
            this.TaiKhoanModal.dataTaiKhoan.detaiCount++;
            this.TaiKhoanModal.dataTaiKhoan.newdetais.push("");
        },
        deleteNewGiangVien() {
            if (this.TaiKhoanModal.dataTaiKhoan.giangvienCount == 3) {
                alert("Hội đồng có ít nhất 1 giảng viên")
                return;
            }
            this.TaiKhoanModal.dataTaiKhoan.giangvienCount--;
            this.TaiKhoanModal.dataTaiKhoan.newgiangviens.pop();
        },
        deleteNewDeTai() {
            if (this.TaiKhoanModal.dataTaiKhoan.giangvienCount == 0) {
                alert("Có ít nhất 1 đề tài trong hội đồng")
                return;
            }
            this.TaiKhoanModal.dataTaiKhoan.detaiCount--;
            this.TaiKhoanModal.dataTaiKhoan.newdetais.pop();
        },
    },
};
</script>
