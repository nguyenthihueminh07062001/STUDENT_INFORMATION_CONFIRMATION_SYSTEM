import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home.vue";
import Login from "@/views/login.vue";
import Notify from "@/views/notify.vue";
import Intro from "@/views/intro.vue";
import Forms from "@/views/forms.vue";
// import THNVQS from "@/views/tamHoanNghiaVuQuanSu.vue";
// import TVTL from "@/views/tuVanTamLy.vue";
// import BHYT from "@/views/baoHiemYTe.vue";
// import DCTT from "@/views/dieuChinhThongTin.vue";
// import XNVV from "@/views/xacNhanVayVon.vue";


//admin
import ADMIN from "@/manager/admin.vue";
//quan ly yeu cau
import QuanLyYeuCau from "@/manager/quanLyYeuCau.vue";
// //quan ly trang thai
import QuanLyTrangThai from "@/manager/quanLyTrangThai.vue";
// //quan ly bieu mau
import QuanLyBieuMau from "@/manager/quanLyBieuMau.vue";
// //quan ly lich su
 import QuanLyLichSu from "@/manager/quanLyLichSu.vue";
// //dang ky xac nhan
 import DangKyXacNhan from "@/views/DangKyXacNhan.vue";



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
    components: {
      default: Home,
    },
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
  //biểu mẫu đăng ký toạn hoãn nghĩa vụ quân sự
  // {
  //   path: "/tamHoanNghiaVuQuanSu",
  //   name: "THNVQS",
  //   component: THNVQS,
  // },
  // // biểu mẫu đăng ký tư vấn sức khỏe
  // {
  //   path: "/tuVanTamLy",
  //   name: "TVTL",
  //   component: TVTL,
  // },
  // // biểu mẫu đăng ký không mua bảo hiểm y tế của trường
  // {
  //   path: "/baoHiemYTe",
  //   name: "BHYT",
  //   component: BHYT,
  // },

  // // biểu mẫu điều chỉnh thông tin sinh viên
  // {
  //   path: "/dieuChinhThongTin",
  //   name: "DCTT",
  //   component: DCTT,
  // },
  // // biểu mẫu đăng ký xác nhận vay vốn
  // {
  //   path: "/xacNhanVayVon",
  //   name: "XNVV",
  //   component: XNVV,
  // },
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
  //quan ly lich su phe duyet
  {
    path: "/quanLyLichSu",
    name: "QuanLyLichSu",
    component: QuanLyLichSu,
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

export default router;
