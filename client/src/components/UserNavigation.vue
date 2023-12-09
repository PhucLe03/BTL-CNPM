<template>
    <aside
        class="bg-gray-x absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-gr duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0"
    >
        <!-- SIDEBAR HEADER -->
        <div
            class="flex h-64 w-64 items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5"
        >
            <img
                src="https://www.jollyboxdesign.com/wp-content/uploads/2021/08/Administrator.png"
            />
        </div>
        <!-- SIDEBAR HEADER -->

        <div
            class="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear"
        >
            <!-- Sidebar Menu -->
            <nav
                class="mt-5 py-4 px-4 lg:mt-9 lg:px-6"
                x-data="{selected: $persist('Dashboard')}"
            >
                <!-- Menu Group -->
                <div>
                    <h3 class="mb-4 ml-4 text-sm font-medium text-black">
                        MENU
                    </h3>

                    <ul class="mb-6 flex flex-col gap-1.5">
                        <!-- Menu Item Dashboard -->
                        <li>
                            <a
                                class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out"
                                href="#"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000000"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <rect
                                        x="3"
                                        y="3"
                                        width="7"
                                        height="7"
                                    ></rect>
                                    <rect
                                        x="14"
                                        y="3"
                                        width="7"
                                        height="7"
                                    ></rect>
                                    <rect
                                        x="14"
                                        y="14"
                                        width="7"
                                        height="7"
                                    ></rect>
                                    <rect
                                        x="3"
                                        y="14"
                                        width="7"
                                        height="7"
                                    ></rect>
                                </svg>

                                Dashboard
                            </a>
                        </li>
                        <!-- Menu Item Dashboard -->



                        <!-- Menu Item Tables -->
                    </ul>
                </div>

                <!-- Others Group -->
                <div>
                    <ul class="mb-6 flex flex-col gap-1.5">
                        <!-- Menu Item Auth Pages -->
                        <li>
                            <a
                                class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black duration-300 ease-in-out"
                                href="/"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#ff0000"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        d="M16 17l5-5-5-5M19.8 12H9M13 22a10 10 0 1 1 0-20"
                                    />
                                </svg>

                                Log out
                            </a>
                        </li>
                        <!-- Menu Item Auth Pages -->
                    </ul>
                </div>
            </nav>
            <!-- Sidebar Menu -->
        </div>
    </aside>
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
            this.$router.push("/");
        },
    },
};
</script>

<style scoped>
.group:hover,
.group:active {
    background-color: #d7eff9; /* Màu D7EFF9 khi hover hoặc focus */
}

.bg-blue {
    background-color: #d7eff9;
}

.bg-gr {
    background-color: rgb(235, 240, 245);
}
</style>
