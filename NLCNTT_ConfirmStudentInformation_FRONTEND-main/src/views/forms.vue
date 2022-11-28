

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
  props: {
    bieuMau: { type: Object, required: true },
  },
  data() {
    const taikhoan = userAccStore();

    return {
      listThongTinDangKy: [],
      bieuMau: [],
      taikhoan

    }
  },


  methods: {

    async retrieveThongTinDangKy() {
      try {
        this.listThongTinDangKy = await ThongTinDangKyService.getAll();
        this.listThongTinDangKy = this.listThongTinDangKy.filter((e) => e.MSSV == this.taikhoan.user.TenTaiKhoan)
      } catch (error) {
        console.log(error);
      }
    },

  },
  mounted() {
    this.retrieveThongTinDangKy();
  },

}

</script>
<template>
  <header-public />
  <main>
    <div class="d-flex justify-content-center container ">

      <div class="m-1 p-2">
        <table class="table table-hover text-center border border-primary  ">
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
                  <option value="quansu">1 - Đơn yêu cầu hoãn nghĩa vụ quân sự </option>
                  <option>2 - Đăng ký tư vấn tâm lý sức khỏe cho sinh viên</option>
                  <option>3 - Đăng ký nộp bản sao thẻ BHYT do địa phương cấp</option>
                  <option>4 - Đăng ký điều chỉnh thông tin sinh viên online</option>
                  <option value="vayvon">5 - Đơn yêu cầu xác nhận vay vốn</option>




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
          <textarea rows="3" cols="90"
            class="px-2">- Sinh viên đăng ký giấy xác nhận chờ nhận email phản hồi sau 02 ngày kể từ ngày đăng ký - trừ thứ 7, chủ nhật và ngày nghỉ lễ.</textarea>

        </div>
        <div class="text-center">

          <router-link class=" btn btn-primary text-light" :to="{ name: 'DangKyXacNhan' }">Đăng ký
          </router-link>
          <a class="btn btn-primary" href="#" role="button">Xóa</a>
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

.bg-form {
  background-color: #3456b4;
}
</style>