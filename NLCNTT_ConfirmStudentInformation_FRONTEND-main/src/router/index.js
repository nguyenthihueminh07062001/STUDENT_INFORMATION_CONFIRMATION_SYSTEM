import { createWebHistory, createRouter } from "vue-router";

import { userAccStore } from "@/Store/userStore";

import Home from "@/views/home.vue";
import Login from "@/views/login.vue";
import Notify from "@/views/notify.vue";
import Intro from "@/views/intro.vue";
import Forms from "@/views/forms.vue";

//admin
import ADMIN from "@/manager/admin.vue";
//quan ly yeu cau
import QuanLyYeuCau from "@/manager/quanLyYeuCau.vue";
// //quan ly trang thai
import QuanLyTrangThai from "@/manager/quanLyTrangThai.vue";
// //quan ly bieu mau
import QuanLyBieuMau from "@/manager/quanLyBieuMau.vue";
// //dang ky xac nhan
import DangKyXacNhan from "@/views/DangKyXacNhan.vue";
// //thong ke
import ThongKe from "@/manager/thongKe.vue";

//edit form
import FormEdit from "@/manager/FormEdit.vue";
//add form
import FormAdd from "@/manager/FormAdd.vue";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },

  {
    path: "/home",
    name: "Home",
    component:
       Home,
    
  },

  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/notify",
    name: "Notify",
    component: Notify,
  },
  {
    path: "/intro",
    name: "Intro",
    component: Intro,
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  },

  //dang ky xac nhan
  {
    path: "/DangKyXacNhan",
    name: "DangKyXacNhan",
    component: DangKyXacNhan,
  },
  // admin
  {
    path: "/admin",
    name: "ADMIN",
    components: {
      default: ADMIN,
    },
  },
  // quan ly yeu cau
  {
    path: "/quanLyYeuCau",
    name: "QuanLyYeuCau",
    component: QuanLyYeuCau,
  },
  //quan ly trang thai
  {
    path: "/quanLyTrangThai",
    name: "QuanLyTrangThai",
    component: QuanLyTrangThai,
  },
  //quan ly bieu mau
  {
    path: "/quanLyBieuMau",
    name: "QuanLyBieuMau",
    component: QuanLyBieuMau,
  },

  //thong ke
  {
    path: "/thongke",
    name: "ThongKe",
    component: ThongKe,
  },
  {
    path: "/formAdd",
    name: "bieumau.add",
    component: FormAdd,
  },
  //edit bieu mau
  {
    path: "/formEdit/:id",
    name: "bieumau.edit",
    component: FormEdit,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = userAccStore();
  if (!userStore.user.TenTaiKhoan && to.name != "Login") {
    next({
      path: "/",
      replace: true,
    });
  }
  next();
});

export default router;
