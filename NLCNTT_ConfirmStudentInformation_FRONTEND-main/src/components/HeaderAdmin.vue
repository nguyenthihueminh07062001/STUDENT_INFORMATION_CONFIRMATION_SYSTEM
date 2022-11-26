
<script>
import InputSearch from '../components/InputSearch.vue'
import BieuMauService from '../services/bieuMau.service'
import SinhVienService from '../services/sinhvien.service'
import { userAccStore } from "@/Store/userStore";
export default {
    components: {
        InputSearch,
        BieuMauService,
        SinhVienService,

    },
    data() {
        return {
            bieuMau: [],
            activeIndex: -1,
            searchText: ''
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
    setup() {
        const taikhoan = userAccStore();
        return { taikhoan };
    },
    methods: {
        logout() {
            this.taikhoan.user = {};
            // this.$route.push({ name: "login" });
            this.$router.push({ name: "Login" });
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
        async getAll() {
            this.allSinhVien = await SinhVienService.getAll();
            console.log(this.allSinhVien);
        },
        search() {
            this.getAll();
            setTimeout(
                () => {
                    if (this.this.searchText != '') {
                        this.allSinhVien = this.allSinhVien.filter(e => e.HoTen.includes(this.searchText));
                    }
                }, 100
            )
        }
    },
    mounted() {
        this.getAll();
    },
}
</script>
<template>

    <header>

        <!-- <div>
            <div class="pre-nav row text-center pre-nav m-0 " style="padding-top: 15px;">
                <div class="col-4">

                </div>
                <InputSearch v-model="searchText" />
                <div class="pre-nav row text-center pre-nav m-0 " >
                    <p class="col-6 row"></p>
                    <div class="row col-3 d-flex justify-content-end pe-5 pt-6">

                        <div v-if="taikhoan.user.TenTaiKhoan == null" class="">
                            <div class=" justify-content-end">

                                <router-link class="nav-link text-dark" :to="{ name: 'Login' }">Đăng nhập</router-link>

                            </div>
                        </div>
                        <div v-else class="user-login ">
                            <div class="row ">
                                <a class="col-3user-icon"><i class="fas fa-user text-dark "></i></a>
                                <span class="col-3 "><b>{{ taikhoan.user.TenTaiKhoan }}</b>
                                    </span>
                                    <a @click="logout()"><i
                                            class=" fa-solid fa-right-from-bracket text-danger"
                                            style="cursor: pointer"></i></a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div> -->
        <!-- <form role="search" class="search-form justify-content-end" action="/search_admin" name="search-form">
            <label>
                <input class="form-control justify-content-en" type="search" placeholder="Search"
                    v-model="this.searchText" @input="this.search()" aria-label="Search" name="search_admin">
            </label>
        </form> -->
        <div>
            <div class="pre-nav row text-center pre-nav m-0 " style="padding-top: 15px;">
                <div class="col-3">

                </div>
                <p class="col-6 row"></p>
                <div class="row col-3 d-flex justify-content-end pe-5 pt-6">

                    <div v-if="taikhoan.user.TenTaiKhoan == null" class="col">
                        <div class=" justify-content-end">

                            <router-link class="nav-link text-dark" :to="{ name: 'Login' }">Đăng nhập</router-link>

                        </div>
                    </div>
                    <div v-else class="user-login ">
                        <div class="row ">
                            <a class="user-icon"><i class="fas fa-user text-dark "></i></a>
                            <span class="">{{ taikhoan.user.TenTaiKhoan }}<a @click="logout()"><i
                                        class=" fa-solid fa-right-from-bracket text-danger"
                                        style="cursor: pointer"></i></a></span>

                        </div>

                    </div>

                </div>
            </div>
        </div>

        <div class="navbar shadow navbar-expand-lg navbar-dark  row   " aria-label="Eighth navbar example">

        </div>
    </header>
</template>

