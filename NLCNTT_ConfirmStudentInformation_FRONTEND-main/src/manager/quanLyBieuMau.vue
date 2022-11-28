

<script>
import HeaderAdmin from "../components/HeaderAdmin.vue";
import BieuMauService from "../services/bieuMau.service";
import SidebarAdmin from "../components/SidebarAdmin.vue";

export default {
    components: {
        HeaderAdmin,
        SidebarAdmin,
        BieuMauService,


    },
    props: {
        bieuMau: { type: Object, required: true },
    },
    data() {
        return {
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

                    <div class=" main-admin p-0">
                        <div class="container">

                            <div class="text-center">
                                <h3 class="fw-bold text-dark text-center title-manager mb-2">DANH SÁCH CÁC BIỂU MẪU
                                </h3>
                            </div>
                            <div class="mt-2 mb-2 action">
                                <button type="button"
                                    class="text-light bg-primary btn btn-addform border border-dark ml-2"
                                    @click="goToAddForm">
                                    <i class="fa-solid fa-plus"></i>
                                    Thêm biểu mẫu
                                </button>
                                <button type="button"
                                    class="btn btn-addform border border-dark ml-2 text-light bg-danger">
                                    Xuất file <i class="fa-solid fa-file-pdf"></i>
                                </button>
                                <button type="button"
                                    class="btn btn-addform  border border-dark ml-2 text-light bg-success">
                                    Xuất file <i class="fa-sharp fa-solid fa-file-excel"></i>
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

.title-manager {
    margin-bottom: 10%;

}

.action {
    padding-top: 3%;
    padding-bottom: 1%;
}
</style>