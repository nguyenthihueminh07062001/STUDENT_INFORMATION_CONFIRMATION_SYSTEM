<script>
import HeaderPublic from "../components/PublicHeader.vue";
import PublicFooters from "../components/PublicFooters.vue";
import BieuMauService from "../services/bieuMau.service";

export default {
  data() {
    return {
      listBieuMau: []
    }
  },
  methods: {

    async retrieveContacts() {
      try {
        this.listBieuMau = await BieuMauService.getAll();
      } catch (error) {
        console.log(error);
      }
    },

  },
  mounted() {
    this.retrieveContacts();
  },
  components: {
    HeaderPublic, PublicFooters
  }
  
}

</script>
<template>
  <header-public/>

  <div class="d-flex justify-content-center">

    <div class="m-1 p-2">
      <h3 class=" text-center mb-2">Một số biểu mẫu đăng ký</h3>
      <ul class="loaiBieuMau">

        <a href="#" class=" m-0">
          <router-link class="nav-link text-primary" :to="{ name: 'THNVQS' }">Đăng ký Giấy tạm hoãn nghĩa vụ quân sự
          </router-link>
        </a>
        <a href="#" class=" m-0">
          <router-link class="nav-link text-primary" :to="{ name: 'TVTL' }">Đăng ký tư vấn tâm lý, sức khỏe cho HSSV
          </router-link>
        </a>
        <a href="#" class=" m-0">
          <router-link class="nav-link text-primary" :to="{ name: 'BHYT' }">Đăng ký nộp bản sao thẻ BHYT do địa phương
            cấp
            (không mua BHYT tại Trường)</router-link>
        </a>
        <a href="#" class=" m-0">
          <router-link class="nav-link text-primary" :to="{ name: 'DCTT' }">Đăng ký điều chỉnh thông tin sinh viên
            Online
          </router-link>
        </a>
        <a href="#" class=" m-0">
          <router-link class="nav-link text-primary" :to="{ name: 'XNVV' }">Đăng ký Giấy xác nhận vay vốn tại địa phương
            (Theo Cá nhân)
          </router-link>
        </a>

      </ul>

    </div>

    <!-- for -->
    <!-- <div v-for="(bieuMau) in this.listBieuMau">
          <div>{{bieuMau.TenBieuMau}}
          </div>
        </div> -->

    <!-- <tr v-for="(bieuMau) in this.listBieuMau">
          <th scope="row ">{{ index + 1 }}</th>
          <td>{{bieuMau.TenBieuMau}}</td>
          
        </tr> -->

    <!-- <table class="table table-hover text-center table-bordered  col-lg-6">
      <thead class="">
        <tr class="text-light bg-primary">
          <th scope="col ">STT</th>
          <th scope="col">TÊN BIỂU MẪU</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bieuMau, index) in this.listBieuMau">
          <th scope="row ">{{ index + 1 }}</th>
          <td>{{ bieuMau.TenBieuMau }}</td>
        </tr>
      </tbody>
    </table> -->



  </div>
  <public-footers/>

</template>

<style>
.loaiBieuMau {
  font-style: italic;
  text-decoration: none;
  list-style: none;
  font-weight: 100;
  border: double blue;
  padding-bottom: 5%;
  margin-top: 0;
}
</style>