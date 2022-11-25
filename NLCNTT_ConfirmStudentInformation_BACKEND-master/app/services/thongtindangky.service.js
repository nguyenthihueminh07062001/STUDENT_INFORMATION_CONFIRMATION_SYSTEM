const { ObjectId } = require("mongodb");

class ThongTinDangKyService {
  extractThongTinDangKyData(payload) {
    const thongTinDangKy = {
      MSSV: payload.MSSV,
      MaBieuMau: payload.MaBieuMau,
      NgayDangKy: payload.NgayDangKy,
      NgayDuyet: payload.NgayDuyet ?? null,
      TrangThaiPheDuyet: payload.TrangThaiPheDuyet ?? "Chờ xác nhận",
      NguoiDuyet: payload.NguoiDuyet ?? null,
      GhiChu: payload.GhiChu,
      SoLuong: payload.SoLuong,
    };
    // remove undifined filds
    Object.keys(thongTinDangKy).forEach(
      (key) => thongTinDangKy[key] === undefined && delete thongTinDangKy[key]
    );
    return thongTinDangKy;
  }
  constructor(client) {
    this.SinhVien = client.db().collection("sinhVien");
    this.ThongTinDangKy = client.db().collection("thongTinDangKy");
    this.BieuMau = client.db().collection("bieuMau");
  }

  async find(filter) {
    const curson = await this.ThongTinDangKy.find(filter);
    return await curson.toArray();
  }

  async getAllThongTinDangKy() {
    const resultAll = await this.ThongTinDangKy.aggregate([
      {
        $lookup: {
          from: "sinhVien",
          localField: "MSSV",

          foreignField: "MSSV",

          as: "thongTin",
        },
      },
      { $unwind: "$thongTin" },
      {
        $lookup: {
          from: "bieuMau",
          localField: "MaBieuMau",

          foreignField: "MaBieuMau",

          as: "allThongTin",
        },
      },
      { $unwind: "$allThongTin" },
    ]);
    return await resultAll.toArray();
  }
  // npm;
  async create(payload) {
    console.log(payload);
    const data = this.extractThongTinDangKyData(payload);
    console.log(data);
    const result = await this.ThongTinDangKy.insertOne(data);
    return result.value;
  }
  async update(id, payload) {
    console.log(234567);
    console.log(id);
    const filter = {
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    };
    console.log(id);
    const update = this.extractThongTinDangKyData(payload);
    const result = await this.ThongTinDangKy.findOneAndUpdate(
      filter,
      { $set: update },
      { returnDocument: "after" }
    );
    console.log(result.value);

    const sv = await this.SinhVien.findOne({
      MSSV: result.value.MSSV,
    });
    console.log(sv);
    const nodemailer = require("nodemailer");
    var transporter = nodemailer.createTransport({
      // config mail server
      service: "Gmail",
      auth: {
        user: "huong280517@gmail.com",
        pass: "fwspvciwqpwngxrs",
      },
    });
    if (result.value.TrangThaiPheDuyet == "Đã duyệt") {
      var mainOptions = {
        from: "CICT",
        to: sv.Email,
        subject: "PHẢN HỒI KẾT QUẢ ĐĂNG KÝ",
        text: "Bạn đã nhận tin nhắn đến từ CICT",
        html:
          // "<h4>Xin chào " +
          // sv.HoTen +
          // "!</h6><br/><p>Yêu cầu đăng ký của bạn đã được duyệt</p>",

          " <b>Xin chào </b>" +
          sv.HoTen +
          "<br/> <b>YÊU CẦU ĐĂNG KÝ CỦA BẠN ĐÃ ĐƯỢC PHÊ DUYỆT</b>" +
          "<p> Vui lòng đến văn phòng đoàn vào thứ 7 để nhận phiếu thông tin đăng ký.</p>" +
          "<small> Trân trọng cảm ơn </small>,",
      };
    } else {
      var mainOptions = {
        from: "CICT",
        to: sv.Email,
        subject: "PHẢN HỒI KẾT QUẢ ĐĂNG KÝ",
        text: "Bạn đã nhận tin nhắn đến từ CICT",
        html:
          " <b>Xin chào </b>" +
          sv.HoTen +
          "<br/> <b>YÊU CẦU ĐĂNG KÝ CỦA BẠN ĐÃ BỊ HỦY</b>" +
          "<br/> <small> Trân trọng cảm ơn </small>,",
      };
    }
    transporter.sendMail(mainOptions, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log("Message sent: " + info.response);
      }
    });
    return result.value;
  }

  // async findAllFavorite(){
  //     return await this.find({favorite:true});
  // }

  //   async login(payload) {
  //     const taikhoan = this.extractTaiKhoanData(payload);
  //     const result = await this.TaiKhoan.findOne({
  //       TenTaiKhoan: taikhoan.tenTaiKhoan,
  //       MatKhau: taikhoan.matKhau,
  //     });
  //     return result;
  //   }
  //   async delete(id) {
  //     const result = await this.TaiKhoan.findOneAndDelete({
  //       _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
  //     });
  //     return result.value;
  //   }

  //   async deleteAll() {
  //     const result = await this.TaiKhoan.deleteMany({});
  //     return result.deletedCount;
  //   }

  // dinh nghia cac phuong thuc truy xuat CSDL su dung mongodb API
}

module.exports = ThongTinDangKyService;
