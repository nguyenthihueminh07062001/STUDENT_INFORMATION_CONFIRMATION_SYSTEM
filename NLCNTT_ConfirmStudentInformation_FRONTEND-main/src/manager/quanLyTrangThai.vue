

<script>
import HeaderAdmin from "../components/HeaderAdmin.vue";
import ThongTinDangKyService from "../services/thongtindangky.service.js";
import SidebarAdmin from "../components/SidebarAdmin.vue";
export default {
    components: {
        SidebarAdmin,
        HeaderAdmin,
    },
    data() {
        return {
            listThongTinDangKy: [],
            selected: null,
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
                                <h3 class="fw-bold text-dark text-center ">DANH SÁCH PHÊ DUYỆT
                                </h3>
                            </div>

                            <div class="row  mt-4">

                                <table class="table table-hover text-center ">
                                    <thead class="">
                                        <tr class="text-danger">
                                            <th scope="col ">STT</th>
                                            <th scope="col">MSSV</th>
                                            <TH scope="col">Họ Tên</TH>
                                            <th scope="col">Tên Biểu mẫu</th>
                                            <th scope="col">Trạng thái phê duyệt</th>
                                            <th scope="col">Ngày đăng ký</th>
                                            <th scope="col">Ngày duyệt</th>
                                            <th scope="col"> </th>

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
                                            <td class="row ">

                                                <a class="">
                                                    <i class="fa-solid fa-circle-info text-primary " data-toggle="modal"
                                                        data-target="#exampleModal"
                                                        @click="this.selected = thongTinDangKy"></i>
                                                </a>

                                                <div>
                                                    <div v-if="this.selected != null" class="modal fade"
                                                        id="exampleModal" tabindex="-1" role="dialog"
                                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div class="modal-dialog" role="document">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title" id="exampleModalLabel">
                                                                        <b>Thông tin đăng ký</b>
                                                                    </h5>
                                                                    <button type="button" class="close"
                                                                        data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <div class="">
                                                                        <div class="row">
                                                                            <div class="col-5">Tên biểu mẫu đăng ký :
                                                                            </div>
                                                                            <div class="col-7">
                                                                                {{ this.selected.allThongTin.TenBieuMau
                                                                                }}</div>
                                                                            <div class="col-5"> Họ và tên sinh viên:
                                                                            </div>
                                                                            <div class="col-7">{{
                                                                                    this.selected.thongTin.HoTen
                                                                            }}</div>
                                                                            <div class="col-5">Email:
                                                                            </div>
                                                                            <div class="col-7">{{
                                                                                    this.selected.thongTin.Email
                                                                            }}</div>
                                                                            <div class="col-5">Ngày sinh :</div>
                                                                            <div class="col-7">{{
                                                                                    this.selected.thongTin.NgaySinh
                                                                            }}
                                                                            </div>
                                                                            <div class="col-5">Giới tính :</div>
                                                                            <div class="col-7">{{
                                                                                    this.selected.thongTin.GioiTinh
                                                                            }}
                                                                            </div>
                                                                            <div class="col-5">Trạng thái sinh viên:
                                                                            </div>
                                                                            <div class="col-7">{{
                                                                                    this.selected.thongTin.TrangThaiSinhVien
                                                                            }} </div>
                                                                            <div class="col-5">Số chứng minh :</div>
                                                                            <div class="col-7">{{
                                                                                    this.selected.thongTin.SoCMND
                                                                            }} </div>

                                                                            <div class="col-5">Hộ khẩu thường trú :
                                                                            </div>
                                                                            <div class="col-7">{{
                                                                                    this.selected.thongTin.DiaChi
                                                                            }} </div>
                                                                            <div class="col-5">Mã lớp :</div>
                                                                            <div class="col-7">{{
                                                                                    this.selected.thongTin.MaLop
                                                                            }} </div>
                                                                            <div class="col-5">Ngành học :</div>
                                                                            <div class="col-7">{{
                                                                                    this.selected.thongTin.TenNganh
                                                                            }} </div>
                                                                            <div class="col-5">Khoa :</div>
                                                                            <div class="col-7">{{
                                                                                    this.selected.thongTin.TenKhoa
                                                                            }} </div>
                                                                            <br>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button"
                                                                        class="btn btn-primary text-light"
                                                                        data-dismiss="modal">Đóng</button>
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

.title-manager {
    margin: 0;
    padding: 0;
}

.status {
    font-size: 80 !important;
}
</style>
