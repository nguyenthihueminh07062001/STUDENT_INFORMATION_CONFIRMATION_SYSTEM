
<script>
import InputSearch from '../components/InputSearch.vue'
import BieuMauService from '../services/bieuMau.service'
export default {
    components: {
        InputSearch,
        BieuMauService,

    },
    data() {
        return {
            bieuMau: [],
            activeIndex: -1,
            searchText: "",
        };
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
            return this.bieumau.filter((_bieumau, index) =>
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

    <header>
        <div>
            <div class="pre-nav row text-center pre-nav m-0 " style="padding-top: 15px;">
                <div class="col-4">

                </div>
                <InputSearch v-model="searchText" />
                <!-- input search -->
                <!-- <div class="col-5 d-flex justify-content-center input-search">
                    <label class="">
                        <input class="form-control " type="search" placeholder="Search" aria-label="Search" value=""
                            name="search_admin">
                    </label>
                
                </div> -->
                <div class="col-3 d-flex justify-content-end pe-5 pt-6">

                    <div class="">
                        <div class=" justify-content-end">

                            <router-link class="nav-link text-dark" :to="{ name: 'Login' }">Đăng nhập</router-link>

                        </div>
                    </div>
                    <div class="col-sm-12 col-md-5 col-lg-3 user-login">
                        <div class="">
                            <a class="user-icon " href="/login"><i class="  fas fa-user text-dark ">
                                    <router-link class="nav-link text-dark decorate" :to="{ name: 'Home' }">
                                    </router-link>
                                </i></a>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        <div class="navbar shadow navbar-expand-lg navbar-dark  row   " aria-label="Eighth navbar example">

        </div>
    </header>




    <!--  -->
    <!-- <nav class="navbar shadow  bg-white ">
    <div class="container-fluid navbar">
        <div class="justify">
            <i class="fas fa-align-justify"></i>
        </div>
        <form role="search" method="
        " class="search-form justify-content-end" action="/search_admin"
            name="search-form">
            <label>
                <input class="form-control justify-content-en" type="search" placeholder="Search" aria-label="Search"
                    value="" name="search_admin">
            </label>
        </form>
        <div class="icon-menu">
            <i class="far fa-bell"></i>
            <a href="/logout"><i class="fas fa-sign-out-alt text-danger ml-2"></i></a>
        </div>
    </div>
</nav> -->
</template>

