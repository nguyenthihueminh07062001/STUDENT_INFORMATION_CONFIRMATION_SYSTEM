<template >
    <div class="col-3 bg-color-sidebars text-light sidebars ">
        <div class=" pt-4">
            <h3>MENU</h3>
        </div>
        <hr>
        <div class="menu-main mb-4 ">
            <div class="menu-body ms-4">

                <!-- <p class="mb-4  fs-5">
                    <a class="" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
                        aria-controls="collapseExample">
                        <router-link class="font-normal text-light" :to="{ name: 'ADMIN' }">
                            Quản lý sinh viên</router-link>
                    </a>
                </p> -->
                <p class="mb-4 fs-5 ">
                    <i class="fa-solid fa-house"></i>
                    <router-link data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false"
                        aria-controls="collapseExample" class="font-normal text-light" :to="{ name: 'ADMIN' }">
                        Quản lý</router-link>

                    <!-- <i class="fas fa-angle-down arrow-down-2"></i><i class="fas fa-angle-right arrow-right-2"></i> -->
                </p>
                <!-- <div class="collapse" id="collapseExample">
                </div> -->

                <p class="mb-4 fs-5">
                    <a class="" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false"
                        aria-controls="collapseExample">

                        <router-link class="font-normal text-light" :to="{ name: 'QuanLyBieuMau' }">
                            Quản lý biểu mẫu</router-link>

                    </a>
                </p>

                <p class="mb-4 fs-5 ">
                    <a class="" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false"
                        aria-controls="collapseExample">

                        <router-link class="font-normal text-light" :to="{ name: 'QuanLyYeuCau' }">
                            Quản lý yêu cầu</router-link>

                    </a>
                </p>
                <div class="collapse" id="collapseExample1">
                </div>

                <p class="mb-4 fs-5">
                    <a class="" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false"
                        aria-controls="collapseExample">

                        <router-link class="font-normal text-light" :to="{ name: 'QuanLyTrangThai' }">
                            Quản lý trạng thái</router-link>

                    </a>
                </p>
                <div class="collapse" id="collapseExample2">
                </div>
                <p class="mb-4 fs-5 ">
                    <i class="fa-solid fa-chart-simple"></i>
                    <router-link data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false"
                        aria-controls="collapseExample" class="font-normal text-light" :to="{ name: 'ThongKe' }">
                        Thống kê</router-link>
                </p>

            </div>

        </div>
        <hr>
        <div class="setting ms-3">
            <!-- <a href="#"><i class="fas fa-cog fs-5 me-3"></i>Cài Đặt</a> -->
            <a class="" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false"
                aria-controls="collapseExample">
                <i class="fas fa-cog"></i>
                Cài đặt
            </a>
        </div>
    </div>
</template>
<style>
.sidebars {
    position: sticky;
    background-color: rgb(25, 36, 66);
    height: 1800px;
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