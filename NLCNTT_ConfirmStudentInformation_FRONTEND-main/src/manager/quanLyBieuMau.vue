

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
    <main class="container-fluid">
        <div class="row">

            <SidebarAdmin class="col-3" />
            <div class="col-9">
                <HeaderAdmin />
                <div class="container-fluid">
                    <!-- <div class="row p-0"> -->

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



                            </div>

                            <div class="row  mt-4">
                                <table class="table table-hover text-center table table-bordered">
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
                                                <router-link :to="{
                                                    name: 'bieumau.edit',
                                                    params: { id: bieuMau.MaBieuMau },
                                                }">
                                                    <i class="fa-solid fa-pen-to-square "></i>
                                                </router-link>
                                                <a href="">
                                                    <i class="fa-solid fa-circle-info text-dark"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>


                                <!-- </div> -->




                            </div>
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