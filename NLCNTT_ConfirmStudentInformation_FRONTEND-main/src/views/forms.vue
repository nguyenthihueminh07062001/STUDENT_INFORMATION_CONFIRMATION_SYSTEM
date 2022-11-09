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
// import BieuMauService from "../services/bieuMau.service";
import ThongTinDangKyService from "../services/thongtindangky.service.js";

export default {
  components: {
    HeaderPublic,
    PublicFooters,
  },
  data() {
    return {
      // bieuMauLocal: this.bieuMau,
      listThongTinDangKy: [],
      bieuMau: [],
    }
  },

  methods: {

    async retrieveContacts() {
      try {
        this.listThongTinDangKy = await ThongTinDangKyService.getAll();
        console.log(this.listThongTinDangKy);
      } catch (error) {
        console.log(error);
      }
    },

  },
  mounted() {
    this.retrieveContacts();
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
                Danh sách các yêu cầu xác nhận
              </th>
            </tr>
            <tr class="text-dark use-color">

              <td colspan="3">

                Tên mẫu xác nhận:
                <select id="" name="">
                  <option value="tatca">Tất cả</option>
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

            </tr>
            <tr class="  text-dark  use-color ">

              <th scope="col ">STT</th>
              <th scope="col">Tên mẫu xác nhận</th>
              <th scope="col">Ngày yêu cầu</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Ghi chú</th>
              <th scope="col">
                <label for="vehicle1">Chọn</label>
                <input type="checkbox" id="check" name="" value="">

              </th>
            </tr>
          </thead>
          <tbody class="text-left">
            <tr v-for="(thongTinDangKy, index) in this.listThongTinDangKy">
              <th scope="row ">{{ index + 1 }}</th>
              <td>{{ thongTinDangKy.allThongTin.TenBieuMau }}</td>
              <td>{{ thongTinDangKy.NgayDangKy }}</td>
              <td class="text-primary">{{ thongTinDangKy.TrangThaiPheDuyet }}</td>
              <td>{{ thongTinDangKy.GhiChu }}</td>
              <td> </td>



            </tr>

          </tbody>
        </table>
        <div class="text-center">
          <h6 class="text-left"> <b> Ghi chú:</b></h6>
          <textarea rows="3"
            cols="90" class="px-2">- Sinh viên đăng ký giấy xác nhận chờ nhận email phản hồi sau 02 ngày kể từ ngày đăng ký - trừ thứ 7, chủ nhật và ngày nghỉ lễ.</textarea>

        </div>
        <div class="text-center">
          <a class="btn btn-primary text-light" href="#" role="button"><router-link class="" :to="{ name: 'DangKyXacNhan' }">Đăng ký
          </router-link></a>
          
          <a class="btn btn-primary" href="#" role="button">Xóa</a>
          
          <!-- <a  class="btn btn-primary text-center">
            <router-link class="" :to="{ name: 'DCTT' }">Trang chủ
            </router-link>
          </a> -->
          <!-- <button class="btn-primary text-light">Xóa</button> -->
        </div>


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

.table th,
.table td,
.table tr,
.table thead tr th,
.table tbody tr td {
  border: 1px solid #19a7ff;
}
.bg-form{
  background-color: #191775;
}
</style>