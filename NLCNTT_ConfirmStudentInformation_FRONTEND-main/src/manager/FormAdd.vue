


<script>

import Form from "../components/Form.vue";
import BieuMauService from "../services/bieuMau.service";
import HeaderAdmin from "../components/HeaderAdmin.vue";
import SidebarAdmin from "../components/SidebarAdmin.vue";

export default {
    components: {
        Form,
        SidebarAdmin,
        HeaderAdmin,
    },
    emits: ["submit:bieuMau", "delete:bieuMau"],
    props: {
        bieuMau: { type: Object, required: true },
    },

    data() {
        return {
            bieuMau: {
                MaBieuMau: "",
                TenBieuMau: "",
            },
            message: "",
        };
        
    },
    

    methods: {
        async addForm(data) {
            try {
                console.log(data);
                await BieuMauService.create(data);
                this.message = "Thêm biểu mẫu thành công !";
                this.$router.push({ name: "QuanLyBieuMau" });
            } catch (error) {
                console.log(error);
            }
        },
    },
};


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
                            <!-- <div v-if="bieuMau" class="page">
    
                                <Form :bieuMau="bieuMau" @submit:bieuMau="updateForm" @delete:bieuMau="deleteForm">
    
                                </Form>
                                <p>{{ message }}</p>
                             
                            </div> -->
                            <Form :bieuMau="bieuMau" @submit:bieuMau="addForm" />
    
                        </div>
                    </div>
                </div>
    
    
            </div>
        </div>
    </main>

    
    <!-- <div class="page">
        <h4 class="text-primary">Thêm biểu mẫu</h4>
        <Form :bieuMau="bieuMau" @submit:bieuMau="addForm" />
        
        <p>{{ message }}</p>
    </div> -->
</template>





