

<script>
import HeaderAdmin from "../components/HeaderAdmin.vue";
import SidebarAdmin from "../components/SidebarAdmin.vue";
import ThongTinDangKyService from "../services/thongtindangky.service.js";

export default {
    components: {
        HeaderAdmin,
        SidebarAdmin,

    },
    data() {
        return {
            listThongTinDangKy: [],
            filtered: [],
            thongke: {}
        }
    },
    methods: {

        async retrieveStatus() {
            try {
                this.listThongTinDangKy = await ThongTinDangKyService.getAll();
                this.filtered = this.listThongTinDangKy;
                this.thongke.all = this.listThongTinDangKy.length;
                this.thongke.daDuyet = this.listThongTinDangKy.filter(e => e.TrangThaiPheDuyet == 'Đã duyệt').length;
                this.thongke.daHuy = this.listThongTinDangKy.filter(e => e.TrangThaiPheDuyet == 'Đã hủy').length;
                this.thongke.choXacNhan = this.listThongTinDangKy.filter(e => e.TrangThaiPheDuyet == 'Chờ xác nhận').length;
                console.log(this.listThongTinDangKy);
            } catch (error) {
                console.log(error);
            }
        },
        filteredDangKy(filter) {
            this.filtered = this.listThongTinDangKy.filter(e => e.TrangThaiPheDuyet == filter)
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
                                <div class="dropdown">
                                    <button class="btn btn-light text-dark border border-dark dropdown-toggle"
                                        type="button" id="dropdownMenuButton" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="fa-solid fa-filter"></i> Lọc
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                        <a class="dropdown-item" href="#">Tất cả</a>
                                        <a class="dropdown-item" href="#" @click="filteredDangKy('Đã duyệt')">Đã
                                            duyệt</a>
                                        <a class="dropdown-item" href="#" @click="filteredDangKy('Đã hủy')">Đã hủy</a>
                                    </div>
                                </div>
                            </div>

                            <div class="container justify-content-center">
                                <p></p>
                                <div class="row col-6  mt-4">
                                    <table class=" text-center table table-bordered">
                                        <thead class="bg-light ">
                                            <tr class="text-dark">
                                                <!-- <th scope="col ">STT</th> -->
                                                <th scope="col">Tất cả</th>
                                                <TH scope="col">Chờ xác nhận</TH>
                                                <th scope="col">Đã duyệt</th>
                                                <th scope="col">Đã hủy</th>

                                            </tr>
                                        </thead>
                                        <tbody class="text-center">
                                            <tr>
                                                <!-- <td> </td> -->
                                                <td> {{ this.thongke.all }}</td>
                                                <td> {{ this.thongke.choXacNhan }}</td>
                                                <td> {{ this.thongke.daDuyet }}</td>
                                                <td> {{ this.thongke.daHuy }}</td>

                                            </tr>

                                        </tbody>
                                    </table>

                                </div>

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

                                        </tr>
                                    </thead>
                                    <tbody class="text-left">
                                        <tr v-for="(thongTinDangKy, index) in this.filtered">
                                            <th scope="row ">{{ index + 1 }}</th>
                                            <td>{{ thongTinDangKy.thongTin.MSSV }}</td>
                                            <td>{{ thongTinDangKy.thongTin.HoTen }}</td>
                                            <td>{{ thongTinDangKy.allThongTin.TenBieuMau }}</td>
                                            <td class="text-primary ">{{ thongTinDangKy.TrangThaiPheDuyet }}</td>
                                            <td>{{ thongTinDangKy.NgayDangKy }}</td>
                                            <td>{{ thongTinDangKy.NgayDuyet }}</td>

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
