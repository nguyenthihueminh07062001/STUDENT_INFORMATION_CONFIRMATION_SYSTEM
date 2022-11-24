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
    <!-- <div class="d-flex justify-content-center">
        <div class="m-1 p-2">
            <div class="container">
                <h3 class="text-center">Thông báo</h3>
                <div>
                    <p>
                        <a class="link text-dark" data-toggle="collapse" href="#one" role="" aria-expanded="false"
                            aria-controls="collapseExample">
                            Danh sác sinh viên đã được xác nhận tạm hoãn nghĩa vụ quân sự
                        </a>
                    </p>
                    <div class="collapse" id="one">
                        <div class="y">
                            <ul>
                                <li>Nguyễn Văn A</li>
                                <li>Nguyễn Văn B</li>
                                <li>Nguyễn Văn B</li>
                                <li>Nguyễn Văn B</li>
                                <li>Nguyễn Văn B</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div>
                    <p>
                        <a class="link text-dark" data-toggle="collapse" href="#two" role="" aria-expanded="false"
                            aria-controls="collapseExample">
                            Danh sác sinh viên đã được xác nhận tư vấn tâm lý, sức khỏe
                        </a>
                    </p>
                    <div class="collapse" id="two">
                        <div class="y">
                            <ul>
                                <li>Nguyễn Văn A</li>
                                <li>Nguyễn Văn B</li>
                                <li>Nguyễn Văn B</li>
                                <li>Nguyễn Văn B</li>
                                <li>Nguyễn Văn B</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div>
                    <p>
                        <a class="link text-dark" data-toggle="collapse" href="#three" role="" aria-expanded="false"
                            aria-controls="collapseExample">
                            Danh sác sinh viên đã được xác nhận có bảo hiểm y tế ở địa phương
                        </a>
                    </p>
                    <div class="collapse" id="three">
                        <div class="y">
                            <ul>
                                <li>Nguyễn Văn A</li>
                                <li>Nguyễn Văn B</li>
                                <li>Nguyễn Văn B</li>
                                <li>Nguyễn Văn B</li>
                                <li>Nguyễn Văn B</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div> -->
    <main>
        <div class="d-flex justify-content-center container ">

            <table class="table table-hover table-bordered col-6 ">
                <thead>
                    <tr>
                        <th colspan="4 " class="text-light bg-form">Tin mới nhất</th>
                        <!-- <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th> -->
                    </tr>
                </thead>
                <tbody class="">
                    <tr>
                        <th scope="row"> 1</th>
                        <td colspan="3">Thông báo học bổng Cathay Life Insurance 2022</td>

                    </tr>
                    <tr>
                        <th scope="row"> 2</th>
                        <td colspan="3">Thông báo phát thẻ Bảo hiểm y tế và Bảo hiểm tai nạn cho sinh viên khóa 48</td>
                    </tr>
                    <tr>
                        <th scope="row"> 3</th>
                        <td colspan="3">Thông báo học bổng "Lương Định Của" năm học 2022 - 2023</td>
                    </tr>
                    <tr>
                        <th scope="row"> 4</th>
                        <td colspan="3">Quyết định hỗ trợ chi phí học tập học đợt ngày 07/11/2022</td>
                    </tr>
                    <tr>
                        <th scope="row"> 5</th>
                        <td colspan="3">Quyết định trợ cấp xã hội cho sinh viên đợt 15/11/2022</td>
                    </tr>
                </tbody>
            </table>
        </div>





    </main>
    <PublicFooters />

</template>

<style>
li {
    list-style: none;
}

.link {
    text-decoration: underline;
}

.bg-form {
    background-color: #3456b4;
}
</style>
