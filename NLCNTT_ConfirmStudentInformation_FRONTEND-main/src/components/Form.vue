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
    <!-- <main>
    <HeaderAdmin />
    <div class="container  "> -->

    <Form @submit="submitBieuMau" :validation-schema="FormSchema">
        <div class="row justify-content-center ">
            <div class="  p-2  rounded container-frame  col-md-6   mb-2  rounded ">
                <!-- <h4 class="text-center mb-2">Hiệu chỉnh biểu mẫu</h4> -->
                <div class="form-group form-group-details">
                    <label for="maBieuMau">Mã biểu mẫu</label>
                    <Field name="maBieuMau" type="text" class="form-control 
                    " v-model="this.bieuMauLocal.MaBieuMau" />
                    <ErrorMessage name="maBieuMau" class="error-feedback text center" />
                </div>
                <div class="form-group form-group-details">
                    <label for="name">Tên biểu mẫu</label>
                    <Field name="name" type="" class="form-control" v-model="this.bieuMauLocal.TenBieuMau" />
                    <ErrorMessage name="name" class="error-feedback text-center" />
                </div>
                <div class="form-group form-group-details text-center hover">
                    <button class="btn btn-primary text-light" @click="submitBieuMau">
                        <!-- <i class="fas fa-save "></i> -->
                         Lưu
                    </button>

                    <button v-if="this.bieuMauLocal._id" type="button" class="ml-2 btn btn-danger  text-light"
                        @click="deleteBieuMau">
                        <!-- <i class="fas fa-trash"></i> -->
                        Xóa
                    </button>
                </div>
            </div>

        </div>
    </Form>



    <!-- </div>
    </main> -->

</template>
<style>
.container-frame {
    box-shadow: 3px 5px 5px 5px #888888;
    margin-top: 7%;

}

.form-group-details {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 5%;
}
</style>

