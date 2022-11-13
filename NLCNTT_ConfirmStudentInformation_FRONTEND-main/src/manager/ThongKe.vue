<script>
import HeaderAdmin from "../components/HeaderAdmin.vue";
import ThongTinDangKyService from "../services/thongtindangky.service";
import SidebarAdmin from "../components/SidebarAdmin.vue";
import { divide } from "lodash";
export default {
    data() {
        return {
            listThongTinDangKy: [],
            selected: null,
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
                                <h3 class="fw-bold text-dark text-center ">THỐNG KÊ
                                </h3>
                            </div>
                            <div class="row  mt-4">

                                <!-- <table class="table table-hover text-center table table-bordered"> -->

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
