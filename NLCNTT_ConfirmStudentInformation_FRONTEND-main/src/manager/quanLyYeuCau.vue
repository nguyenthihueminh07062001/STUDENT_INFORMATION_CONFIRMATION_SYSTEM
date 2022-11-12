<script>
import HeaderAdmin from "../components/HeaderAdmin.vue";
import ThongTinDangKyService from "../services/thongtindangky.service";
import SidebarAdmin from "../components/SidebarAdmin.vue";
import { divide } from "lodash";
export default {
    data() {
        return {
            listThongTinDangKy: []
        }
    },
    methods: {
        async retrieveContacts() {
            try {
                this.listThongTinDangKy = await ThongTinDangKyService.getAll();
                this.listThongTinDangKy = this.listThongTinDangKy.filter((e) => e.TrangThaiPheDuyet == "Chờ xác nhận")
            } catch (error) {
                console.log(error);
            }
        },
        async handleSubmit(data) {
            data.NgayDuyet = new Date().toLocaleString("vi-VN", {
                timeZone: "Asia/Ho_Chi_Minh"
            });
            data.NguoiDuyet = 'admin'
            await ThongTinDangKyService.update(data.id, data);
            this.retrieveContacts();
        }
    },
    mounted() {
        this.retrieveContacts();
    },
    components: {
        SidebarAdmin,
        HeaderAdmin,
        divide
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
                        <div class="">
                            <div class=" row  mt-4 p-0">
                            </div>
                            <div class="text-center">
                                <h3 class="fw-bold text-dark text-center ">DANH SÁCH TẤT CẢ YÊU CẦU
                                </h3>
                            </div>
                            <div class="row  mt-4">

                                <!-- <table class="table table-hover text-center table table-bordered"> -->
                                <table class="table table-hover  ">
                                    <thead class="">
                                        <tr class="text-danger">
                                            <th scope="col ">STT</th>
                                            <th scope="col">MSSV</th>
                                            <TH scope="col">Họ Tên</TH>
                                            <th scope="col">Tên Biểu mẫu</th>
                                            <!-- <TH scope="col">Email</TH> -->
                                            <th scope="col">Ngày đăng ký</th>
                                            <th scope="col">Trạng thái</th>
                                            <th scope="col">Tác vụ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(thongTinDangKy, index) in this.listThongTinDangKy">
                                            <th scope="row ">{{ index + 1 }}</th>
                                            <td>{{ thongTinDangKy.thongTin.MSSV }}</td>
                                            <td>{{ thongTinDangKy.thongTin.HoTen }}</td>
                                            <td class="col-3">{{ thongTinDangKy.allThongTin.TenBieuMau }}</td>
                                            <!-- <td>{{ thongTinDangKy.thongTin.Email }}</td> -->
                                            <td>{{ thongTinDangKy.NgayDangKy }}</td>
                                            <td class="text-primary">{{ thongTinDangKy.thongTin.TrangThaiSinhVien }}
                                            </td>
                                            <td class="row">
                                                <a class=" text-success"
                                                    @click="handleSubmit({ id: thongTinDangKy._id, TrangThaiPheDuyet: 'Đã xác nhận' })"><i
                                                        class="fas fa-check text-success me-1 "></i></a>
                                                <a
                                                    @click="handleSubmit({ id: thongTinDangKy._id, TrangThaiPheDuyet: 'Đã hủy' })">
                                                    <i class="fas fa-ban text-danger "></i>
                                                </a>
                                                <a class="">
                                                    <i class="fa-solid fa-circle-info text-dark" data-toggle="modal"
                                                        data-target="#exampleModal"></i>
                                                </a>
                                                <div>
                                                    <!-- Button trigger modal -->
                                                    <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                                        Launch demo modal
                                                    </button> -->

                                                    <!-- Modal -->
                                                    <div class="modal fade" id="exampleModal" tabindex="-1"
                                                        role="dialog" aria-labelledby="exampleModalLabel"
                                                        aria-hidden="true">
                                                        <div class="modal-dialog" role="document">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title" id="exampleModalLabel">Thông
                                                                        tin đăng ký</h5>
                                                                    <button type="button" class="close"
                                                                        data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <div class=""
                                                                        v-for="(thongTinDangKy, index) in this.listThongTinDangKy">
                                                                        <div class="row">
                                                                            <div class="col-5">Tên biểu mẫu đăng ký :
                                                                            </div>
                                                                            <div class="col-7">
                                                                                {{ thongTinDangKy.allThongTin.TenBieuMau
                                                                                }}</div>
                                                                            <div class="col-5"> Họ và tên sinh viên:
                                                                            </div>
                                                                            <div class="col-7">{{
                                                                                    thongTinDangKy.thongTin.HoTen
                                                                            }}</div>
                                                                            <div class="col-5">Ngày sinh :</div>
                                                                            <div class="col-7">{{
                                                                                    thongTinDangKy.thongTin.NgaySinh
                                                                            }}
                                                                            </div>
                                                                            <div class="col-5">Giới tính :</div>
                                                                            <div class="col-7">{{
                                                                                    thongTinDangKy.thongTin.GioiTinh
                                                                            }}
                                                                            </div>
                                                                            <div class="col-5">Số chứng minh :</div>
                                                                            <div class="col-7">{{
                                                                                    thongTinDangKy.thongTin.SoCMND
                                                                            }} </div>
                                                                            <div class="col-6">Ngành học :</div>
                                                                            <div class="col-6">{{
                                                                                    thongTinDangKy.thongTin.TenNganh
                                                                            }} </div>
                                                                            <br>
                                                                        </div>
                                                                        <!-- <p scope="row ">{{ index + 1 }}</p>
                                        <p>{{ thongTinDangKy.thongTin.HoTen }}</p>
                                        <p>{{ thongTinDangKy.allThongTin.TenBieuMau }}</p> -->
                                                                    </div>
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-secondary"
                                                                        data-dismiss="modal">Close</button>
                                                                    <button type="button" class="btn btn-primary">Save
                                                                        changes</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
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
</style>
