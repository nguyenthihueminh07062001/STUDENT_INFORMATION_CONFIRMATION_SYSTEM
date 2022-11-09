<template>
    <div class="col-3 bg-color-sidebars text-light sidebars">
        <div class=" pt-4">
            <h3>MENU</h3>
        </div>
        <hr>
        <div class="menu-main mb-4 ">
            <div class="menu-body ms-4">

                <p class="mb-4  fs-5">
                    <a class="" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
                        aria-controls="collapseExample">
                        <i class="">
                            <router-link class="font-normal text-light" :to="{ name: 'ADMIN' }">
                                Quản lý sinh viên</router-link>
                        </i>
                    </a>
                </p>
                <div class="collapse" id="collapseExample">
                </div>

                <p class="mb-4 fs-5 ">
                    <a class="" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false"
                        aria-controls="collapseExample">
                        <i class="">
                            <router-link class="font-normal text-light" :to="{ name: 'QuanLyYeuCau' }">
                                Quản lý yêu cầu</router-link>
                        </i>
                    </a>
                </p>
                <div class="collapse" id="collapseExample1">
                </div>

                <p class="mb-4 fs-5">
                    <a class="" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false"
                        aria-controls="collapseExample">
                        <i class="">
                            <router-link class="font-normal text-light" :to="{ name: 'QuanLyTrangThai' }">
                                Quản lý trạng thái</router-link>
                        </i>
                    </a>
                </p>
                <div class="collapse" id="collapseExample2">
                </div>

                <p class="mb-4 fs-5">
                    <a class="" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false"
                        aria-controls="collapseExample">
                        <i class="">
                            <router-link class="font-normal text-light" :to="{ name: 'QuanLyBieuMau' }">
                                Quản lý Biểu mẫu</router-link>
                        </i>
                    </a>
                </p>
                <p class="mb-4 fs-5">
                    <a class="" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false"
                        aria-controls="collapseExample">
                        <i class="">
                            <router-link class="font-normal text-light" :to="{ name: 'QuanLyLichSu' }">
                                Quản lý lich sử</router-link>
                        </i>
                    </a>
                </p>
                <div class="collapse" id="collapseExample2">
                </div>

                <p class="mb-4 fs-5 ">
                    <a class="" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false"
                        aria-controls="collapseExample">
                        <i class=""></i>Thống kê
                    </a><i class="fas fa-angle-down arrow-down-2"></i><i class="fas fa-angle-right arrow-right-2"></i>
                </p>
                <div class="collapse" id="collapseExample1">
                </div>

            </div>

        </div>
        <hr>
        <div class="setting ms-3">
            <a href="#"><i class="fas fa-cog fs-5 me-3"></i>Cài Đặt</a>
        </div>
    </div>
</template>
<style>
.sidebars {
    position: sticky;
    background-color: rgb(25, 36, 66);
    height: 800px;
}

.sidebars a {
    text-decoration: none;
    color: white;
}

.navbar {
    font-size: 25px;
    position: sticky;
    top: 0;
    z-index: 1000;
}
</style>