


<script>

import Form from "../components/Form.vue";
import BieuMauService from "../services/bieuMau.service";

export default {
    components: {
        Form,
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
    <div class="page">
        <h4 class="text-primary">Thêm biểu mẫu</h4>
        <Form :bieuMau="bieuMau" @submit:bieuMau="addForm" />
        
        <p>{{ message }}</p>
    </div>
</template>





