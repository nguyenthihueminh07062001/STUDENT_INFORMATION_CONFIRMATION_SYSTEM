<script>

import HeaderPublic from "../components/PublicHeader.vue";
import PublicFooters from "../components/PublicFooters.vue";

export default {
    components: {
        HeaderPublic, PublicFooters
    }
}
</script>


<template>
    <HeaderPublic />

    <div class="">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner container-fluid">
                <div class="carousel-item active">
                    <img class="d-block w-100 " src="../assets/images/home_1_carousel.png" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="../assets/images/home_2_carousel.png" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="../assets/images/home_3_carousel.png" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

    </div>
    <div class="container container-main">
        <div class="notify-infor">
            <p class="text-center p-2 title-2">Công bố thành lập 4 trường, 1 khoa và 1 viện thuộc Trường Đại học Cần Thơ
            </p>
            <div class="row">
                <div class="row">


                    <!-- <div class="container">
                            <img class="d-block w-100 col-6 image" src="../assets/images/truong_back_khoa.jpg" alt="">
                            <div class="overlay">
                                <div class="text">Hello World</div>
                            </div>
                        </div> -->
                    <!-- <div class="d-block w-100  col-6">
                            <div class="image ">
                                <img class="image__img image-fluid" src="../assets/images/truong_back_khoa.jpg" alt="">
                                <div class="image__overlay">
                                    <div class="image__title">Truong back khoa</div>
                                </div>
                            </div>
                        </div> -->
                    <div class="col-6">
                        <img class="d-block w-100  img-school" src="../assets/images/truong_back_khoa.jpg" alt="">
                        <p class="text-center description">Trường bách khoa</p>
                    </div>

                    <div class="col-6">
                        <img class="d-block w-100" src="../assets/images/truong_cntt_va_tt.jpg" alt="">
                        <p class="text-center description">Trường công nghệ thông tin và truyền thông</p>
                    </div>





                </div>
                <div class="row pt-2">
                    <div class="col-6">
                        <img class="d-block w-100  img-school" src="../assets/images/Truong_nong_nghiep.jpg" alt="">
                        <p class="text-center description">Trường nông nghiệp</p>
                    </div>

                    <div class="col-6">
                        <img class="d-block w-100" src="../assets/images/truong_kinh_te.jpg" alt="">
                        <p class="text-center description">Trường kinh tế</p>
                    </div>
                   
                </div>


            </div>
        </div>
        <div class="highlight_news ">
            <h2 class="text-center "> NHỮNG CON SỐ NỔI BẬT </h2>
            <p class="text-center mb-2">(Tính đến cuối năm 2021)</p>

            <div class="row mt-2">

                <div class="col  m-2 row_detail ">
                    <i class="fa-solid fa-user icon_highlight text-primary"></i>
                    <p class="row text_highlight  ">43850</p>
                    <p class="row ">Sinh viên</p>
                </div>

                <div class="col m-2">
                    <i class="fa-solid fa-user-graduate icon_highlight text-primary"></i>
                    <p class="row text_highlight">2553</p>
                    <p class="row">Học viên sau Đại học</p>
                </div>


                <div class="col m-2">
                    <i class="fa-solid fa-users icon_highlight text-primary"></i>
                    <p class="row text_highlight">153</p>
                    <p class="row">Giáo sư, Phó giáo sư</p>

                </div>

                <div class="col m-2">
                    <i class="fa-solid fa-microscope icon_highlight text-primary"></i>
                    <p class="row text_highlight">428</p>
                    <p class="row">Đề tài NCKH</p>
                </div>

                <div class="col m-2">
                    <i class="fa-solid fa-book icon_highlight text-primary"></i>
                    <p class="row text_highlight">2053</p>
                    <p class="row">Bài báo</p>

                </div>

                <div class="col m-2">
                    <i class="fa-solid fa-handshake icon_highlight text-primary"></i>
                    <p class="row text_highlight">37</p>
                    <p class="row">Dự án quốc tế</p>

                </div>

            </div>

        </div>

    </div>

    <PublicFooters />


</template>

<style>
.header-banner {
    background-color: #1887cd;
}

.title-2 {
    font-size: 1.4rem;
    font-weight: 620;

}

.description {
    color: rgb(49, 46, 46);
    font-size: large;
}

.row_detail {
    justify-items: center;
}

.icon_highlight {
    font-size: 50px !important;

}

.text_highlight {
    font-size: larger;
    font-weight: 700;

}

.container-main {
    color: #000000;
}
</style>
