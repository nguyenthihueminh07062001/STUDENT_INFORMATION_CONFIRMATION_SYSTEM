

<script>
// import * as yup from "yup";
// import { Form, Field, ErrorMessage } from "vee-validate";
import HeaderAdmin from "../components/HeaderAdmin.vue";
import BieuMauService from "../services/bieuMau.service";
import SidebarAdmin from "../components/SidebarAdmin.vue";

export default {
    components: {
        HeaderAdmin,
        SidebarAdmin,
        BieuMauService,
        // Form,
        // FormAdd,
        // Field,
        // ErrorMessage,
        
    },
    props: {
        bieuMau: { type: Object, required: true },
    },
    data() {
        return {
            // bieuMauLocal: this.bieuMau,
            listBieuMau: [],
            activeIndex: -1,
            bieuMau: [],
            searchText: "",
        }
    },
    watch: {
        // giám sát các thay đổi cua biến searchText
        //Bỏ chọn phần tử đang được chọn trong danh sách
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        // chuyen cac doi tuong contact thanh chuoi de tien cho tiem kiem
        bieuMauStrings() {
            return this.bieuMau.map((bieuMau) => {
                const {
                    MaBieuMau,
                    TenBieuMau,
                } = bieuMau;
                return [MaBieuMau, TenBieuMau,].join("");
            });
        },

        // tra ve cac contact co chua thong tin can tim kiem
        filteredBieuMau() {
            if (!this.searchText) return this.bieuMau;
            return this.bieuMau.filter((_bieuMau, index) =>
                this.bieuMauStrings[index].includes(this.searchText)
            );
        },
        activeBieuMau() {
            if (this.activeIndex < 0) return null;
            return this.filteredBieuMau[this.activeIndex];
        },
        filteredBieuMauCount() {
            return this.filteredBieuMau.length;
        },
    },
    methods: {
        goToAddForm() {
            this.$router.push({
                name: "bieumau.add"
            });
        },
        async retrieveBieuMau() {
            try {
                this.bieuMau = await BieuMauService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveBieuMau();
            this.activeIndex = -1;
        },
    },
    mounted() {
        this.refreshList();
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

                        <div class="text-center">
                            <h3 class="fw-bold text-dark text-center ">DANH SÁCH CÁC BIỂU MẪU
                            </h3>
                        </div>
                        <div>
                            <button type="button" class="btn btn-addform border border-dark" @click="goToAddForm">
                                Thêm biểu mẫu
                            </button>

                            <!-- <button type="button" class="btn btn-addform border border-dark" data-toggle="modal"
                                data-target="#exampleModal" >
                                Thêm biểu mẫu
                            </button> -->

                            <!-- Modal -->
                            <!-- <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Thêm biểu mẫu</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <form method="post" action="/add_product">
                                                <input type="hidden" name="total" value="<?= $total ?>">
                                                <div class="modal-body">
                                                    <div class="form-group mb-4">
                                                        <label for="" class="form-label">Mã biểu mẫu :</label>
                                                        <input type="text" class="form-control py-2" name="id_products"
                                                            placeholder="Nhập mã biểu mãu" required>



                                                        <label for="" class="form-label">Tên biểu mẫu :</label>
                                                        <input type="text" class="form-control py-2"
                                                            name="name_products" placeholder="Nhập tên biểu mẫu"
                                                            required>



                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger text-light"
                                                data-dismiss="modal">Thoát</button>
                                            <button type="trashbutton" class="btn btn-primary text-light">Lưu</button>
                                        </div>
                                    </div>
                                </div>
                            </div> -->

                        </div>

                        <div class="row  mt-4">
                            <table class="table table-hover text-center table table-bordered">

                                <!-- <table class="table table-hover text-center table-bordered  col-lg-6"> -->
                                <thead class="">
                                    <tr class="text-danger">
                                        <th scope="col ">STT</th>
                                        <th scope="col">MÃ BIỂU MẪU</th>
                                        <th scope="col">TÊN BIỂU MẪU</th>
                                        <th scope="col">THAO TÁC</th>
                                    </tr>
                                </thead>
                                <tbody class="text-left">
                                    <tr v-for="(bieuMau, index) in this.bieuMau" v-if="filteredBieuMauCount > 0"
                                        :bieuMau="filteredBieuMau">

                                        <th scope="row ">{{ index + 1 }}</th>
                                        <td>{{ bieuMau.MaBieuMau }}</td>
                                        <td>{{ bieuMau.TenBieuMau }}</td>
                                        <td class="text-center">

                                            <!--  start hieu chinh -->
                                            <router-link :to="{
                                                name: 'bieumau.edit',
                                                params: { id: bieuMau.MaBieuMau },
                                            }">
                                                <i class="fa-solid fa-pen-to-square "></i>
                                            </router-link>
                                            <!-- end hieu chinh -->


                                            <!-- <a @click="deleteBieuMau">
                                                <i class="fas fa-trash-alt text-danger "></i>
                                            </a> -->

                                            <a href="">
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
    </main>
</template>


<style>
.status {
    font-size: 80 !important;
}
</style>