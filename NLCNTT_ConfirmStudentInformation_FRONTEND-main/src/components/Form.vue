<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import HeaderAdmin from "./HeaderAdmin.vue";
import SidebarAdmin from "./SidebarAdmin.vue";
export default {
    components: {
        HeaderAdmin,
        SidebarAdmin,
        Form,
        Field,
        ErrorMessage,


    },
    emits: ["submit:bieuMau", "delete:bieuMau"],
    props: {
        bieuMau: { type: Object, required: true },
    },

    
    data() {
        const FormSchema = yup.object().shape({
            MabieuMau: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(3, "Tên phải ít nhất 3 ký tự")
                .max(6, "Tên có nhiều nhất 6 ký tự"),

            TenbieuMau: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(10, "Tên phải ít nhất 10 ký tự")
                .max(60, "Tên có nhiều nhất 60 ký tự"),


        });
        return {
            bieuMauLocal: this.bieuMau,
            FormSchema,
        };
    },
    methods: {
        submitBieuMau() {
            this.$emit("submit:bieuMau", this.bieuMauLocal);
        },
        deleteBieuMau() {
            this.$emit("delete:bieuMau", this.bieuMauLocal.MaBieuMau);
        }
    }
};
</script>
<template>
    <HeaderAdmin />
    <div class="container  ">
        <div class="row justify-content-center ">
            <div class="  col-lg-5 m-2  rounded container-frame ">
                    <Form @submit="submitBieuMau" :validation-schema="FormSchema">
                        <!-- <h4 class="text-center mb-2">Hiệu chỉnh biểu mẫu</h4> -->
                        <div class="form-group">
                            <label for="maBieuMau">Mã biểu mẫu</label>
                            <Field name="maBieuMau" type="text" class="form-control" v-model="this.bieuMauLocal.MaBieuMau" />
                            <ErrorMessage  name="maBieuMau" class="error-feedback text center" />
                        </div>
                        <div class="form-group">
                            <label for="name">Tên biểu mẫu</label>
                            <Field name="name" type="" class="form-control" v-model="this.bieuMauLocal.TenBieuMau" />
                            <ErrorMessage name="name" class="error-feedback text-center" />
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary text-light" @click="submitBieuMau">
                                <i class="fas fa-save "></i> Lưu
                            </button>
                          
                            <button v-if="this.bieuMauLocal._id" type="button" class="ml-2 btn btn-danger  text-light" @click="deleteBieuMau">
                                <i class="fas fa-trash"></i>
                                Xóa
                            </button>
                        </div>
                    </Form>
    
            </div>
    
        </div>
    
    </div>
    
</template>
<style>
Form{
    margin: 10%;
}
.container-frame{
    background-color: rgb(214, 219, 234);
}
</style>

