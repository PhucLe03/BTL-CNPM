<template>
    <nav class="bg-blue-500 p-5 flex justify-end items-center gap-5 text-xl text-white font-bold">
        <RouterLink to="/" class="hover:text-blue-950">Trang chủ</RouterLink>
        <RouterLink to="/mayin" class="hover:text-blue-950">MAYIN</RouterLink>
        <RouterLink to="/vitri" class="hover:text-blue-950">VITRI</RouterLink>
        <RouterLink to="/taikhoan" class="hover:text-blue-950">TAIKHOAN</RouterLink>
        <RouterLink to="/filecam" class="hover:text-blue-950">CAUHINH</RouterLink>
        <RouterLink to="/tailieu" class="hover:text-blue-950">TAILIEU</RouterLink>
        <RouterLink to="/thongke" class="hover:text-blue-950">Thống Kê</RouterLink>
        <button @click="logout"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Đăng Xuất
        </button>
    </nav>
    <RouterView />
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
import axios from "../fetch/axios";
</script>

<script>

export default {
    methods: {
        async logout() {
            const res = await axios.get("/logout");
            this.$router.push("/login");
        },
    },
};
</script>
