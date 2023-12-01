import { createRouter, createWebHistory } from "vue-router";

import PrinterManagement from "@/Views/PrinterManagement.vue";
import Printer from "@/Views/PrinterManagement/Printer.vue";
import User from "@/Views/PrinterManagement/User.vue";
import Extra from "@/Views/PrinterManagement/Extra.vue";
import Home from "@/Views/Home.vue";
import About from "@/Views/About.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: "Trang chủ",
    },
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/manage",
    name: "PrinterManagement",
    component: PrinterManagement,
    meta: {
      title: "Quản lý",
    },
  },
  {
    path: "/manage/mayin",
    name: "MayIn",
    component: Printer,
    meta: {
      title: "Quản lý máy in",
    },
  },
  {
    path: "/manage/nguoidung",
    name: "NguoiDung",
    component: User,
    meta: {
      title: "Quản lý người dùng",
    },
  },
  {
    path: "/manage/extra",
    name: "Extra",
    component: Extra,
    meta: {
      title: "Quản lý thêm",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "Giới thiệu",
    },
  },
  //   {
  //     path: "/:pathMatch(.*)*",
  //     name: "NotFoundPage",
  //     component: NotFoundPage,
  //     meta: {
  //       title: "Page Not Found",
  //     },
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const titleFromParams = to.params?.pageTitle;

  if (titleFromParams) {
    document.title = `${titleFromParams} - ${document.title}`;
  } else {
    document.title = to.meta?.title ?? "BKSmartPrinter";
  }

  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  next();
});

export default router;
