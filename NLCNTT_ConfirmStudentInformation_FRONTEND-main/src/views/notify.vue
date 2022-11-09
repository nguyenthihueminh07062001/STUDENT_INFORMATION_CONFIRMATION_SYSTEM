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
    <div class="d-flex justify-content-center">
        <div class="m-1 p-2">
            <div class="container">
                <h3 class="text-center">Thông báo</h3>
                <div>
                    <!-- Nghĩa vụ quân sự -->
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
                    <!-- Tư vấn tâm lý -->
                    <p>
                        <a class="link text-dark" data-toggle="collapse" href="#two" role="" aria-expanded="false"
                            aria-controls="collapseExample">
                            Danh sác sinh viên đã được xác nhận tư vấn tâm lý, sức khỏe
                        </a>
                        <!-- <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                Button with data-target
                                            </button> -->
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
                    <!-- Bảo hiểm y tế -->
                    <p>
                        <a class="link text-dark" data-toggle="collapse" href="#three" role="" aria-expanded="false"
                            aria-controls="collapseExample">
                            Danh sác sinh viên đã được xác nhận có bảo hiểm y tế ở địa phương
                        </a>
                        <!-- <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                Button with data-target
                                            </button> -->
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
                <!-- <div>
                ADMIN
                <a href="#" class=" m-0">
                    <router-link class="nav-link text-primary" :to="{name:'ADMIN' }">ADMIN
                    </router-link>
                </a>
            </div>
             -->

            </div>
        </div>
    </div>
    <PublicFooters />

</template>

<style>
li {
    list-style: none;
}

.link {
    text-decoration: underline;
}
</style>
