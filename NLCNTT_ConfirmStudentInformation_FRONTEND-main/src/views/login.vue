<script>
import taiKhoanService from '../services/taiKhoan.service';
import HeaderPublic from "../components/PublicHeader.vue";
import PublicFooters from "../components/PublicFooters.vue";
import { userAccStore } from "@/Store/userStore";

export default {
    data() {
        const userStore = userAccStore();
        return {
            taikhoan: {
                tenTaiKhoan: "",
                matKhau: ""
            },
            result: {},
            userStore,
            error: false
        }
    },
    methods: {
        async login(data) {
            try {
                this.result = await taiKhoanService.login(data);
                this.userStore.user = this.result;
                if (this.result.TenTaiKhoan) {
                    this.error = false
                    if (this.result.TenTaiKhoan == "admin") {
                        this.$router.push({ name: "ADMIN" });
                    }

                    //  else { this.$router.push({ name: "Forms" }); }
                    else { this.$router.push({ name: "Home" }); }
                } else {
                    this.error = true
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
    components: {
        HeaderPublic, PublicFooters
    }
}
</script>


<template>
    <HeaderPublic />
    <div class="container  ">
        <div class="row justify-content-center ">
            <div class="col-sm-12 col-md-8 col-lg-4   rounded frame-login">
                <h2 class="text-center login-title">Đăng nhập</h2>
                <div class="justify-content-center">
                    <div class="form-group   ">
                        <label for="mssv " class="">Tên Tài khoản:</label>
                        <input type="text" class="form-control" id="mssv " placeholder="Nhập vào tên tài khoản "
                            required v-model="this.taikhoan.tenTaiKhoan">
                    </div>
                    <div class="form-group  ">
                        <label for="pwd">Mật khẩu:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Nhập vào mật khẩu!"
                            v-model="this.taikhoan.matKhau">
                    </div>
                    <p v-if="error" class="text-danger">Tên tài khoản hoặc mật khẩu không đúng</p>
                    <div class="checkbox ">
                        <label><input type="checkbox" class="fw-bolder"> Nhớ tài khoản này</label>
                    </div>
                    <button @click="login(this.taikhoan)"
                        class="btn btn-primary text-light  btn-submit border border-white ">Đăng
                        nhập</button>
                </div>

            </div>

        </div>

    </div>
    <PublicFooters />
</template>



<style>
body {
    font-family: 'Poppings', sans-serif !important;
}

label {

    font-weight: 700;
    font-size: larger;
    font-family: serif;
}

h2 {

    font-weight: 700;
    font-family: serif;
}

.btn-submit {
    margin: 10%;

}

.btn-submit:hover {
    background-color: rgb(116, 171, 235);

}

.btn-submit:active {
    background-color: rgb(47, 125, 214);

}

.container-form {
    padding: 3% 5% 3% 5%;
    background-color: #f2f2f2;
}

.container {
    padding-top: 5%;
    padding-bottom: 3%;

}

.frame-login {

    background-color: rgb(249, 250, 251);
    box-shadow: 3px 5px 5px 5px #888888;
}

.login-title {
    padding-top: 5%;
}
</style>
