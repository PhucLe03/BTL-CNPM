import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MayInView from '../views/MayInView.vue'
import ViTriView from '../views/ViTriView.vue'
import TaiKhoanView from '../views/TaiKhoanView.vue'
import FileCamView from '../views/CauHinhView.vue'
import TaiLieuView from '../views/TaiLieuView.vue'

import ThongKeView from '../views/ThongKeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/mayin',
            name: 'mayin',
            component: MayInView
        },
        {
            path: '/vitri',
            name: 'vitri',
            component: ViTriView
        },
        {
            path: '/taikhoan',
            name: 'taikhoan',
            component: TaiKhoanView
        },
        {
            path: '/filecam',
            name: 'filecam',
            component: FileCamView
        },
        {
            path: '/tailieu',
            name: 'tailieu',
            component: TaiLieuView
        },
        {
            path: '/thongke',
            name: 'thongke',
            component: ThongKeView
        },
        {
            path: '/inan',
            name: 'inan',
            component: () => import('../views/InAnView.vue')
        },
        {
            path: '/mytaikhoan',
            name: 'mytaikhoan',
            component: () => import('../views/MyTaiKhoanView.vue')
        }
    ]
})

export default router