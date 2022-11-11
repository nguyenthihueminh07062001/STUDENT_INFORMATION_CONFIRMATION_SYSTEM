<script>
import HeaderAdmin from "../components/HeaderAdmin.vue";
import ThongTinDangKyService from "../services/thongtindangky.service";
import SidebarAdmin from "../components/SidebarAdmin.vue";
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
            data.NgayDuyet = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
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
                                            <td>{{ thongTinDangKy.allThongTin.TenBieuMau }}</td>
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
                                                    <i class="fa-solid fa-circle-info text-dark"></i>
                                                </a>
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