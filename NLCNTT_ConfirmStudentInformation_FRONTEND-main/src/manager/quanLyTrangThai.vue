<!-- <script>
import HeaderAdmin from "../components/HeaderAdmin.vue";
import ThongTinBieuMauService from "../services/thongtinbieumau.service";
import SidebarAdmin from "../components/SidebarAdmin.vue";
export default {
    data() {
        return {
            listThongTinBieuMau: []
        }
    },
    methods: {

        async retrieveContacts() {
            try {
                this.listThongTinBieuMau = await ThongTinBieuMauService.getAll();
                console.log(this.listThongTinBieuMau);
            } catch (error) {
                console.log(error);
            }
        },

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
    <HeaderAdmin />
    <main>
        <div class="container-fluid">
            <div class="row p-0">
                <SidebarAdmin/>
                <div class="col-9 main-admin p-0">
                    <div class="container">
                        <div class=" row  mt-4 p-0">

                        </div>
                        <div class="text-center">
                            <h3 class="fw-bold text-dark text-center ">DANH SÁCH KẾT ĐANG CHỜ PHÊ DUYỆT
                            </h3>
                        </div>

                        <div class="row  mt-4">


                            <table class="table table-hover text-center table table-bordered">
                                <thead class="">
                                    <tr class="text-danger">
                                        <th scope="col ">STT</th>
                                        <th scope="col">MSSV</th>
                                        <TH scope="col">Họ Tên</TH>
                                        <th scope="col">Tên Biểu mẫu</th>
                                        <TH scope="col">Email</TH>
                                        <th scope="col">Trạng thái phê duyệt</th>
                                        <th scope="col">Ngày đăng ký</th>
                                        <th scope="col">Ngày duyệt</th>

                                    </tr>
                                </thead>
                                <tbody class="text-left">
                                    <tr v-for="(thongTinBieuMau, index) in this.listThongTinBieuMau">
                                        <th scope="row ">{{ index + 1 }}</th>
                                        <td>{{ thongTinBieuMau.thongTin.MSSV }}</td>
                                        <td>{{ thongTinBieuMau.thongTin.HoTen }}</td>
                                        <td>{{ thongTinBieuMau.allThongTin.TenBieuMau }}</td>
                                        <td>{{ thongTinBieuMau.thongTin.Email }}</td>
                                        <td class="text-primary">{{ thongTinBieuMau.TrangThaiPheDuyet }}</td>
                                        <td>{{ thongTinBieuMau.NgayDangKy }}</td>
                                        <td>{{ thongTinBieuMau.NgayDuyet }}</td>
                                    </tr>

                                </tbody>
                            </table>

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



.status {
    font-size: 80 !important;
}
</style> -->



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
        }
    },
    methods: {

        async retrieveContacts() {
            try {
                this.listThongTinDangKy = await ThongTinDangKyService.getAll();
                console.log(this.listThongTinDangKy);
            } catch (error) {
                console.log(error);
            }
        },

    },
    mounted() {
        this.retrieveContacts();
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
                            <div class=" row  mt-4 p-0">

                            </div>
                            <div class="text-center">
                                <h3 class="fw-bold text-dark text-center ">DANH SÁCH KẾT ĐANG CHỜ PHÊ DUYỆT
                                </h3>
                            </div>

                            <div class="row  mt-4">


                                <table class="table table-hover text-center table table-bordered">
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

                                        </tr>
                                    </thead>
                                    <tbody class="text-left">
                                        <tr v-for="(thongTinDangKy, index) in this.listThongTinDangKy">
                                            <th scope="row ">{{ index + 1 }}</th>
                                            <td>{{ thongTinDangKy.thongTin.MSSV }}</td>
                                            <td>{{ thongTinDangKy.thongTin.HoTen }}</td>
                                            <td>{{ thongTinDangKy.allThongTin.TenBieuMau }}</td>
                                            <!-- <td>{{ thongTinDangKy.thongTin.Email }}</td> -->
                                            <td class="text-primary">{{ thongTinDangKy.TrangThaiPheDuyet }}</td>
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



.status {
    font-size: 80 !important;
}
</style>

