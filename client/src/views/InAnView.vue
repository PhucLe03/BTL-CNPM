<script setup>
import Inputa from "../components/InputField.vue";
import Navigation from "../components/UserNavigation.vue";
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
                                    Print Single File
                                </h4>
                            </div>

                            <div class="container mx-auto p-4">
                                <div class="max-w-full mx-auto bg-white p-8 shadow-lg rounded-lg">
                                    <label class="block mb-4">
                                        <span class="text-black">File</span>
                                        <input type="file" @change="handleFileUpload($event)"
                                            class="mt-1 p-2 border rounded-md w-full" />
                                    </label>
                                    <iframe v-bind:src="imagePreview" width="100%" height="600" v-show="showPreview"
                                        class="mb-4"></iframe>
                                    <button v-on:click="Submit()"
                                        class="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600">
                                        Submit
                                    </button>
                                </div>
                                <div id="InAnModal" tabindex="-1" aria-hidden="true"
                                    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                    <div class="relative w-full max-w-2xl max-h-full">
                                        <!-- Modal content -->
                                        <div class="relative bg-white rounded-lg shadow">
                                            <!-- Modal header -->
                                            <div
                                                class="bg-blue-500 flex items-start justify-between p-4 border-b rounded-t">
                                                <h3 class="text-xl font-semibold text-gray-900">
                                                    {{ InAnModal.txtTitle }}
                                                </h3>
                                            </div>

                                            <!-- Modal body -->
                                            <div class="grid grid-cols-12 gap-3 p-6">
                                                <div class="col-span-12">
                                                    <Inputa label="id InAn" type="text" placeholder="" v-model="InAnModal.dataInAn
                                                        .IDMAYIN
                                                        " />
                                                </div>
                                                <div class="col-span-6">
                                                    <Inputa label="id vitri" type="text" placeholder="" v-model="InAnModal.dataInAn
                                                        .TENFILE
                                                        " />
                                                </div>
                                                <div class="col-span-6">
                                                    <Inputa label="ten InAn" type="text" placeholder="" v-model="InAnModal.dataInAn
                                                        .SOTRANG
                                                        " />
                                                </div>
                                                <div class="col-span-6">
                                                    <Inputa label="model" type="text" placeholder="" v-model="InAnModal.dataInAn
                                                        .LOAIFILE
                                                        " />
                                                </div>
                                                <div class="col-span-6">
                                                    <Inputa label="mota" type="text" placeholder="" v-model="InAnModal.dataInAn
                                                        .LOAIGIAY
                                                        " />
                                                </div>
                                                <div class="col-span-6">
                                                    <Inputa label="tinhtrang" type="text" placeholder="" v-model="InAnModal.dataInAn
                                                        .THOIGIANIN
                                                        " />
                                                </div>
                                                <div class="col-span-6">
                                                    <Inputa label="tinhtrang" type="text" placeholder="" v-model="InAnModal.dataInAn
                                                        .THOIGIANNHAN
                                                        " />
                                                </div>
                                                <div class="col-span-6">
                                                    <Inputa label="tinhtrang" type="text" placeholder="" v-model="InAnModal.dataInAn
                                                        .SOBANCOPY
                                                        " />
                                                </div>
                                                <div class="col-span-6">
                                                    <Inputa label="tinhtrang" type="text" placeholder="" v-model="InAnModal.dataInAn
                                                        .TONGSOTRANG
                                                        " />
                                                </div>
                                                <div class="col-span-6">
                                                    <Inputa label="tinhtrang" type="text" placeholder="" v-model="InAnModal.dataInAn
                                                        .IDTAIKHOAN
                                                        " :read-only="true" />
                                                </div>
                                            </div>

                                            <!-- Modal footer -->
                                            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                                                <button @click="submitFile" type="button"
                                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                                    Lưu
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            file: "",
            showPreview: false,
            imagePreview: "",
            InAnModal: {
                txtTitle: "",
                submitType: "Save",
                dataInAn: {
                    IDMAYIN: null,
                    TENFILE: null,
                    SOTRANG: null,
                    LOAIFILE: null,
                    LOAIGIAY: null,
                    THOIGIANIN: null,
                    THOIGIANNHAN: null,
                    SOBANCOPY: null,
                    TONGSOTRANG: null,
                    IDTAIKHOAN: null,
                },
            },
            modal: null,
        };
    },
    mounted() {
        this.modal = new Modal(document.querySelector("#InAnModal"));
    },
    methods: {
        handleFileUpload(event) {
            this.file = event.target.files[0];

            let reader = new FileReader();

            reader.addEventListener(
                "load",
                function () {
                    this.showPreview = true;
                    this.imagePreview = reader.result;
                }.bind(this),
                false
            );

            if (this.file) {
                reader.readAsDataURL(this.file);
            }
        },
        Submit() {
            this.modal.toggle();

            this.InAnModal = {
                txtTitle: "Thêm mới In Ấn",
                submitType: "Save",
                dataInAn: {
                    IDMAYIN: null,
                    TENFILE: null,
                    SOTRANG: null,
                    LOAIFILE: null,
                    LOAIGIAY: null,
                    THOIGIANIN: null,
                    THOIGIANNHAN: null,
                    SOBANCOPY: null,
                    TONGSOTRANG: null,
                    IDTAIKHOAN: null,
                },
            };
        },
        submitFile() {
            let formData = new FormData();
            formData.append("file", this.file);
            axios
                .post("/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then(() => {
                    console.log("SUCCESS!!");
                })
                .catch(() => {
                    console.log("FAILURE!!");
                });
        },
    },
};
</script>
