<script setup>
import Inputa from "../components/InputField.vue";
</script>

<template>
  <section class="bg-gray-50">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl text-center leading-tight tracking-tight text-gray-700 md:text-2xl ">
            Smart Printing Service Management
          </h1>
          <div class="">
            <img class="container mx-auto max-w-full h-auto scale-50" src="../images/user/hcmut.png" alt="">
          </div>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <Inputa label="" type="text" placeholder="Username" v-model="username" />
            </div>
            <div>
              <Inputa label="" type="password" placeholder="Password" v-model="password" />
            </div>
            <button type="button" @click="login"
              class="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Sign in
            </button>

          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "../fetch/axios";

export default {
  username: "",
  password: "",
  methods: {
    async login() {
      const res = await axios.post("/login", {
        username: this.username,
        password: this.password,
      });
      if (res.data.message === "success") {
        localStorage.setItem("id", res.data.data.IDTAIKHOAN);
        res.data.data.VAITRO === "admin"
          ? this.$router.push("/mayin")
          : this.$router.push("/inan");
      } else {
        alert("Sai tài khoản hoặc mật khẩu");
      }
    },
  },
};
</script>
