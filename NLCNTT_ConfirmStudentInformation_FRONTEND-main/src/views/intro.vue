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
    <h2 class="text-center p-2"> Tổng quan</h2>
    <div class="`overview container">
        <div class="row">
            <div class="col">
                <img src="../assets/images/intro-thumbnail.jpg" class="w-100" alt="">
            </div>
            <div class="col">
                Đại học Cần Thơ, cơ sở đào tạo đại học và sau đại học trọng điểm của Nhà nước ở ĐBSCL, là trung tâm văn
                hóa - khoa học
                kỹ thuật của vùng. Trường đã không ngừng hoàn thiện và phát triển, từ một số ít ngành đào tạo ban đầu,
                Trường đã củng
                cố, phát triển thành một trường đa ngành đa lĩnh vực. Hiện nay Trường đào tạo 91 chuyên ngành đại học
                (trong đó có 2
                chương trình đào tạo tiên tiến, 8 chương trình đào tạo chất lượng cao), 51 chuyên ngành cao học (trong
                đó 1 ngành liên
                kết với nước ngoài, 3 ngành đào tạo bằng tiếng Anh), 19 chuyên ngành nghiên cứu sinh.
                Nhiệm vụ chính của Trường là đào tạo, nghiên cứu khoa học (NCKH), chuyển giao công nghệ phục vụ phát
                triển kinh tế - xã
                hội trong vùng. Song song với công tác đào tạo, ĐHCT đã tham gia tích cực các chương trình NCKH, ứng
                dụng những thành
                tựu khoa học kỹ thuật nhằm giải quyết các vấn đề về khoa học, công nghệ, kinh tế, văn hoá và xã hội của
                vùng.

            </div>

        </div>

    </div>
    <div class="container">
        <div class="highlight-video">

            <h2 class="text-center p-2">Video nổi bật</h2>
            <div class="row">
                <video class=" col-sm-12 col-lg-6 " src="../assets/images/video-gioithieutruong_new.mp4" autoplay
                    controls muted> </video>
                <video class="  col-sm-12 col-lg-6" src="../assets/images/video-gioithieutruong_2019.mp4"
                    controls></video>

            </div>

            <div class="history">
                <h2 class="text-center history "> Lịch sử hình thành</h2>
                <div>

                    <p>
                        Viện Đại học Cần Thơ được thành lập vào ngày 31/3/1966, trong cơ cấu tổ chức có Bộ phận hành
                        chánh của
                        Viện gồm: Văn
                        phòng Viện Trưởng, Văn phòng Tổng thư Ký và các Phòng chức năng: Hành chánh và Văn thư, Nhân
                        viên, Kế
                        toán và Ngoại
                        viện, Học vụ (có Tổng hội sinh viên ), Y tế Sinh viên, Thống kê- Hướng dẫn liên lạc quốc tế, văn
                        phòng
                        Liên lạc (đặt tại
                        Viện Đại học Sài Gòn).
                    </p>
                    <p>
                        Ngày 09/9/1966, Bộ Giáo dục ra Nghị định thành lập Phòng Hành chánh và Văn thư trực thuộc Tòa
                        Viện
                        trưởng Viện Đại học
                        Cần Thơ, với chức năng hành chính, giao dịch đối ngoại, liên lạc với các cơ quan trong và ngoài
                        Viện,
                        sưu tập tài liệu,
                        thông tin, lưu trữ, tổ chức nghi lễ, tiếp tân…

                    </p>
                    <p>
                        Sau ngày miền Nam hoàn toàn giải phóng 30/4/1975, Phòng Hành chánh và Văn thư được đổi tên thành
                        Phòng
                        Hành chánh Quản
                        trị.
                    </p>
                    <p>
                        Ngày 26/8/1995, Phòng Hành chánh Quản trị được Bộ Giáo dục và Đào tạo ra Quyết định số 2960/GD &
                        ĐT đổi
                        tên (QĐ thành
                        lập) thành Phòng Hành chính-Tổng hợp.

                    </p>
                    <p>
                        Năm 2007 phòng được đổi tên thành Phòng Kế hoạch Tổng hợp. Ngoài chức năng hành chính tổng hợp
                        phòng còn
                        bổ sung thêm
                        chức năng lập, theo dõi và đôn đốc thực hiện kế hoạch của Trường.
                    </p>
                    <p>
                        Trãi qua nhiều giai đoạn, với nhiều tên gọi khác nhau, Phòng Kế hoach Tổng hợp đã có nhiều đóng
                        góp quan
                        trọng trong
                        tiến trình hình thành và phát triển của Đại học Cần Thơ.
                    </p>

                </div>

            </div>

        </div>

    </div>

    <!-- final -->
    <div class="container ">
        <h2 class="text-center mb-2">Một số hình ảnh minh họa</h2>
        <div class="row">
            <div class="col">
                <img src="../assets/images/1.jpg" alt="Avatar" class="image" style="width:100%">
            </div>
            <div class="col">
                <img src="../assets/images/2.jpg" alt="Avatar" class="image" style="width:100%">
            </div>
        </div>
    </div>
    <div class="container">
        <div class=" row text-center">
            <div class="col rounded border border-primary container-icon col ">
                <p class="icon-highligh">
                    <i class="fa-solid fa-eye   text-primary 
                                    "></i>
                </p>

                <p>Tầm nhìn</p>
                <p>Trường Đại học Cần Thơ trở thành một trong những trường hàng đầu về chất lượng của Việt Nam và nằm
                    trong nhóm
                    các trường
                    mạnh về đào tạo, nghiên cứu khoa học được ghi nhận trong khu vực và thế giới.
                </p>

            </div>
            <div class="col rounded border border-primary container-icon col  ">
                <!-- <i class="fa-solid fa-home   text-primary px-3 py-2 my-4 ms-3 
            "></i> -->
                <p class="icon-highligh">
                    <i class="fa-solid fa-home   text-primary 
                                                "></i>
                </p>
                <p>Sứ mệnh</p>
                <p>Trường Đại học Cần Thơ là trung tâm đào tạo, nghiên cứu khoa học chuyển giao công nghệ hàng đầu của
                    quốc gia,
                    có đóng
                    góp hữu hiệu vào sự nghiệp đào tạo nhân lực chất lượng cao.</p>

            </div>
            <div class="col rounded border border-primary container-icon col">
                <!-- <i class="fa-solid fa-book-open-reader   text-primary px-3 py-2 my-4 ms-3 
                "></i> -->
                <p class="icon-highligh">
                    <i class="fa-solid fa-book-open-reader   text-primary 
                                                    "></i>
                </p>
                <p>Mục tiêu giáo dục</p>
                <p> Đào tạo nhân lực trình độ cao, nâng cao dân trí, bồi dưỡng nhân tài; nghiên cứu khoa học và công
                    nghệ tạo ra
                    tri thức,
                    sản phẩm mới, phục vụ nhu cầu phát triển kinh tế - xã hội, bảo đảm quốc phòng, an ninh, hội nhập
                    quốc tế.
                </p>

            </div>

        </div>

    </div>
    <PublicFooters />
</template>

<style>
h3 {
    font-family: serif;
    font-weight: 700;
}

.history,
h3 {
    margin-top: 2%;
}

.container-icon {
    margin: 0 1%;
}

.icon-highligh {
    font-size: 50px;
}
</style>
