
<script>
import Form from '@/components/Form.vue'
import BieuMauService from "@/services/bieuMau.service";
import SidebarAdmin from "../components/SidebarAdmin.vue";
import HeaderAdmin from "../components/HeaderAdmin.vue";

export default {
    components: {
        Form,
        SidebarAdmin,
        HeaderAdmin,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            bieuMau: null,
            message: "",
        };
    },
    methods: {
        async getBieuMau(id) {
            try {
                this.bieuMau = await BieuMauService.get(id);

            } catch (error) {
                console.log(error);
                // chuyen sang trang NotFound dong thoi gui cho URL khong doi
                // this.$router.push({
                //     name: "notfound",
                //     params: {
                //         pathMatch: this.$route.path.split("/").slice(1)
                //     },
                //     query: this.$route.query,
                //     hash: this.$route.hash,
                // });
            }
        },
        async updateForm(data) {
            try {
                await BieuMauService.update(this.bieuMau._id, data);
                // this.message = "Biểu mẫu được cập nhật thành công.";
                this.$router.push({ name: "QuanLyBieuMau" });
            } catch (error) {
                console.log(error);

            }
            //
        },
        async deleteForm() {
            if (confirm("Bạn muốn xóa biểu mẫu này?")) {
                try {
                    await BieuMauService.delete(this.bieuMau._id);

                    this.$router.push({ name: "QuanLyBieuMau" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },

    created() {
        this.getBieuMau(this.$route.params.id);
        this.message = "";
    }
}
</script>
<template>
    <main class="container-fluid">
        <div class="row">
            <SidebarAdmin class="" />
            <div class="col-9">
                <HeaderAdmin />
                <div class="container-fluid">
                    <div class="row p-0  ">
                        <div class="container-fluid ">
                            <div v-if="bieuMau" class="page">

                                <Form :bieuMau="bieuMau" @submit:bieuMau="updateForm" @delete:bieuMau="deleteForm">

                                </Form>
                                <p>{{ message }}</p>
                                <!-- </div>
                                </div> -->

                                <!-- <table class="table table-hover text-center table-bordered table table-bordered">
                                    <thead class="">
                                        <tr class="text-danger ">
                                            <th scope="col ">STT</th>
                                            <th scope="col">MSSV</th>
                                            <th scope="col">HỌ VÀ TÊN</th>
                                            <th scope="col">EMAIL</th>
                                            <TH scope="col">TRẠNG THÁI</TH>
                                        </tr>
                                    </thead>
                                    <tbody class="text-left">
                                        <tr v-for="(sinhVien, index) in this.listSinhVien">
                                            <th scope="row ">{{ index + 1 }}</th>
                                            <td>{{ sinhVien.MSSV }}</td>
                                            <td>{{ sinhVien.HoTen }}</td>
                                            <td>{{ sinhVien.Email }}</td>
                                            <td class="text-primary">{{ sinhVien.TrangThaiSinhVien }}</td>
                                        </tr>

                                    </tbody>
                                </table> -->

                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    </main>




</template>