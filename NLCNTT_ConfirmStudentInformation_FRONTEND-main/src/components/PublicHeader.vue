

<script>
import { userAccStore } from "@/Store/userStore";

export default {
    setup() {
        const taikhoan = userAccStore();
        return { taikhoan };
    },
    methods: {
        logout() {
            this.taikhoan.user = {};
            this.$router.push({ name: "Login" });
        }
    }
};
</script>


<template>
    <header>
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
                            <span class="">{{ taikhoan.user.TenTaiKhoan }}<a @click="logout()"><i class=" fa-solid fa-right-from-bracket text-danger" style="cursor: pointer"></i></a></span>
                            
                        </div>

                    </div>

                </div>
            </div>
        </div>

        <div class="navbar navbar-expand-lg navbar-dark  row   " aria-label="Eighth navbar example">

        </div>

        <div class="bg-header">
            <router-link :to="{ name: 'Home' }">
                <img src="../assets/images/PhongCongTacSinhVien.png" height="" class="img-fluid mx-auto d-block "
                    alt="">

            </router-link>

        </div>

        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-light ftco-navbar-light" id="ftco-navbar">
            <div class="container-fluid t">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                    aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="fa fa-bars"></span> Menu
                </button>
                <div class="collapse navbar-collapse" id="ftco-nav">
                    <ul class="navbar-nav m-auto">
                        <li class="nav-item active"><a href="#" class="">
                                <router-link class="nav-link text-dark decorate" :to="{ name: 'Home' }">Trang chủ
                                </router-link>
                            </a></li>

                        <li class="nav-item"><a href="#">
                                <router-link class="nav-link text-dark" :to="{ name: 'Intro' }">Giới thiệu</router-link>
                            </a></li>
                        <li class="nav-item"><a href="#">
                                <router-link class="nav-link text-dark" :to="{ name: 'Notify' }">Thông báo</router-link>
                            </a></li>
                        <li class="nav-item active"><a href="#" class="">
                                <router-link class="nav-link text-dark" :to="{ name: 'Forms' }">Biểu mẫu</router-link>
                            </a></li>


                        <!-- <li class="nav-item active"><a href="#" class="">
                            <router-link class="nav-link text-dark" :to="{ name: 'Login' }">Đăng nhập</router-link>
                        </a>
                    </li> -->
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style>
.space {
    margin: 1% 2% 0;
    padding: 0 1%;
}

.nav {
    display: flex;
    background-color: #000;
    height: 60px;
    align-items: center;
    font-style: Monospace;
    font-size: 100%;
    font-weight: 100;

}

.bg-color {
    background-color: #000;
}

.search-bg {
    background-color: #A7FFE4;
}

button {
    color: #000 !important;
}

.bg-header {
    background-color: #1887cd;
}

.nav-item {

    font-size: 1rem;
    margin-bottom: 1%;

}

.nav-link {
    margin-bottom: 0%;
    padding: 0% !important;

}

a {
    margin-left: 10px;
    margin-right: 10px;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1rem;
    font-weight: 600;
}

a:hover {
    text-decoration: none !important;

}
</style>

