

<script>
// import * as yup from "yup";
// import { Form, Field, ErrorMessage } from "vee-validate";
import HeaderAdmin from "../components/HeaderAdmin.vue";
import BieuMauService from "../services/bieuMau.service";
import SidebarAdmin from "../components/SidebarAdmin.vue";
import ThongTinDangKyService from "../services/thongtindangky.service.js";

export default {
    components: {
        HeaderAdmin,
        SidebarAdmin,
        // BieuMauService,

    },
    data() {
        return {
            listThongTinDangKy: [],
        }
    },
    methods: {

        async retrieveStatus() {
            try {
                this.listThongTinDangKy = await ThongTinDangKyService.getAll();
                console.log(this.listThongTinDangKy);
            } catch (error) {
                console.log(error);
            }
        },

    },
    mounted() {
        this.retrieveStatus();
    },

}

</script>

<template>
    <main class="container-fluid">
        <div class="row">
            <SidebarAdmin class="col-3" />
            <div class="col-9">
                <HeaderAdmin />
                <div class="container-fluid">

                    <!-- <div class="row p-0"> -->
                    <div class=" main-admin p-0">
                        <div class="container">

                            <div class="text-center">
                                <h3 class="fw-bold text-dark text-center m-0 ">THỐNG KÊ
                                </h3>
                            </div>
                            <div class=" action m-0 p-0">
                                <button type="button"
                                    class="text-light bg-success btn btn-addform border border-dark ml-2"
                                    @click="goToAddForm">
                                    Đã duyệt <i class="fa-solid fa-check"></i>

                                </button>
                                <button type="button"
                                    class="btn btn-addform border border-dark ml-2 text-light bg-danger">
                                    Đã hủy <i class="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                            <div class="row pt-2 mt-2 ml-2">
                                <b>Số lượng:</b>

                            </div>

                            <div class="row  mt-4">

                                <table class="table table-hover text-center ">
                                    <thead class="">
                                        <tr class="text-danger">
                                            <th scope="col ">STT</th>
                                            <th scope="col">MSSV</th>
                                            <TH scope="col">Họ Tên</TH>
                                            <th scope="col">Tên Biểu mẫu</th>
                                            <!-- <TH scope="col">Email</TH> -->
                                            <th scope="col">Trạng thái phê duyệt</th>
                                            <th scope="col">Ngày đăng ký</th>
                                            <th scope="col">Ngày duyệt</th>
                                            <!-- <th scope="col">Tác vụ</th> -->

                                        </tr>
                                    </thead>
                                    <tbody class="text-left">
                                        <tr v-for="(thongTinDangKy, index) in this.listThongTinDangKy">
                                            <th scope="row ">{{ index + 1 }}</th>
                                            <td>{{ thongTinDangKy.thongTin.MSSV }}</td>
                                            <td>{{ thongTinDangKy.thongTin.HoTen }}</td>
                                            <td>{{ thongTinDangKy.allThongTin.TenBieuMau }}</td>
                                            <td class="text-primary ">{{ thongTinDangKy.TrangThaiPheDuyet }}</td>
                                            <td>{{ thongTinDangKy.NgayDangKy }}</td>
                                            <td>{{ thongTinDangKy.NgayDuyet }}</td>
                                            <!-- <td class="row">
                                                <a class=" text-dark text-center "><i
                                                        class="fa-solid fa-paper-plane"></i></a>
                                            </td> -->
                                        </tr>

                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    </main>
</template>

<style>
body {
    font-family: 'Poppings', sans-serif !important;
}

.title-manager {
    margin: 0;
    padding: 0;
}

.status {
    font-size: 80 !important;
}
</style>
