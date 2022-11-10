<!-- <script>
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
</style> -->

<script>
import HeaderPublic from "../components/PublicHeader.vue";
import PublicFooters from "../components/PublicFooters.vue";
import BieuMauService from "../services/bieuMau.service";
import ThongTinDangKyService from "../services/thongtindangky.service.js";
import { userAccStore } from "@/Store/userStore";

export default {
  components: {
    HeaderPublic,
    PublicFooters,
    BieuMauService,
  },
  data() {
    const taikhoan = userAccStore();

    return {
      // bieuMauLocal: this.bieuMau,
      listThongTinDangKy: [],
      bieuMau: [],
      data: {

      },
      taikhoan
    }
  },

  methods: {

    async retrieveBieuMau() {
      try {
        this.bieuMau = await BieuMauService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    async handleSubmit() {
      this.data.MSSV = this.taikhoan.user.TenTaiKhoan
      this.data.NgayDangKy = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
      const rs = await ThongTinDangKyService.create(this.data);
      this.$router.push("/forms");

    },

  },
  computed: {
    // chuyen cac doi tuong contact thanh chuoi de tien cho tiem kiem
    bieuMauStrings() {
      return this.bieuMau.map((bieuMau) => {
        const {
          MaBieuMau,
          TenBieuMau,
        } = bieuMau;
        return [MaBieuMau, TenBieuMau,].join("");
      });
    },

    // tra ve cac contact co chua thong tin can tim kiem

    activeBieuMau() {
      if (this.activeIndex < 0) return null;
      return this.filteredBieuMau[this.activeIndex];
    },
  },
  created() {
    this.retrieveBieuMau();
  },

}

</script>
<template>
  <header-public />
  <main>
    <div class="d-flex justify-content-center container ">

      <div class="m-1 p-2">
        <!-- <h3 class=" text-center mb-2  ">Một số biểu mẫu đăng ký</h3> -->
        <table class="table table-hover text-center border border-primary  ">

          <!-- <table class="table table-hover text-center table-bordered  col-lg-6"> -->
          <thead class=" ">
            <tr class="text-light bg-form">
              <th colspan="6 ">
                Đăng ký xác nhận
              </th>
            </tr>
            <!-- <tr class="text-dark use-color">

                            <td colspan="">

                                Tên mẫu xác nhận:
                                <select id="" name="">
                                    <option value="tatca">Tất cả`</option>
                                    <option value="vayvon">1 - Đơn yêu cầu xác nhận vay vốn</option>
                                    <option value="quansu">2 - Đơn yêu cầu hoãn nghĩa vụ quân sự </option>
                                </select>
                            </td>
                            <td colspan="3">
                                Trạng thái:
                                <select id="" name="">
                                    <option value="tatca">Tất cả</option>
                                    <option value="vayvon">Đã in</option>
                                    <option value="quansu">Chưa in</option>
                                </select>
                                <button class="text-light button-1">&nbsp;Liệt kê</button>
                            </td>

                        </tr> -->
            <!-- <tr class="  text-dark  use-color ">

                            <th scope="col ">STT</th>
                            <th scope="col">Tên mẫu xác nhận</th>
                            <th scope="col">Ngày yêu cầu</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Ghi chú</th>
                            <th scope="col">
                                <label for="vehicle1">Chọn</label>
                                <input type="checkbox" id="check" name="" value="">

                            </th>
                        </tr> -->
          </thead>
          <tbody class="text-left">
            <tr>
              <!-- <td colspan="6" class="text-center">

                                Tên mẫu xác nhận:
                                <select id="" name="">
                                    <option value="">1 - Đơn yêu cầu xác nhận vay vốn</option>
                                    <option value="">2 - Đơn yêu cầu hoãn nghĩa vụ quân sự </option>
                                    
                                </select>
                            </td> -->
              <td colspan="6" class="text-center">

                Tên mẫu xác nhận:
                <select v-model="this.data.MaBieuMau">
                  <option v-for="(bieuMau, index) in this.bieuMau" :value="bieuMau.MaBieuMau">{{ index + 1 }} - {{
                      bieuMau.TenBieuMau
                  }}</option>

                </select>
              </td>
            </tr>
            <tr>
              <td colspan="6" class="text-center">
                <div class="text-center">
                  <h6 class="text-left"> <b> Ghi chú:</b></h6>
                  <textarea class="px-2" rows="3" cols="70" v-model="this.data.GhiChu"></textarea>

                </div>
              </td>

            </tr>
            <tr>
              <td colspan="6" class="text-center">
                <div class="">
                  <a class="btn btn-primary text-light" role="button" @click="handleSubmit">
                    Thêm

                  </a>

                  <a class="btn btn-primary text-light" href="#" role="button">
                    <router-link class=" text-light" :to="{ name: 'Forms' }">Hủy
                    </router-link>
                  </a>
                </div>
              </td>

            </tr>

          </tbody>
        </table>



      </div>





    </div>

  </main>

  <public-footers />

</template>

<style scoped>
.loaiBieuMau {
  font-style: italic;
  text-decoration: none;
  list-style: none;
  font-weight: 100;
  border: double blue;
  padding-bottom: 5%;
  margin-top: 0;
}

.use-color {
  background-color: #DAE9F3;

}

.button-1 {
  background-color: #3872B2;
  border: 1px solid #80B5D7;
}



.bg-form {
  background-color: #3456b4;
}
</style>