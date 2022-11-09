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
                <SidebarAdmin />
                <div class="col-9 main-admin p-0">
                    <div class="container">
                        <div class=" row  mt-4 p-0">
                        </div>
                        <div class="text-center">
                            <h3 class="fw-bold text-dark text-center ">DANH SÁCH TẤT CẢ YÊU CẦU
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
                                        <th scope="col">Ngày đăng ký</th>
                                        <th scope="col">Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(thongTinDangKy, index) in this.listThongTinDangKy">
                                        <th scope="row ">{{ index + 1 }}</th>
                                        <td>{{ thongTinDangKy.thongTin.MSSV }}</td>
                                        <td>{{ thongTinDangKy.thongTin.HoTen }}</td>
                                        <td>{{ thongTinDangKy.allThongTin.TenBieuMau }}</td>
                                        <td>{{ thongTinDangKy.thongTin.Email }}</td>
                                        <td>{{ thongTinDangKy.NgayDangKy }}</td>
                                        <td class="text-primary">{{ thongTinDangKy.thongTin.TrangThaiSinhVien }}</td>
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
</style>
