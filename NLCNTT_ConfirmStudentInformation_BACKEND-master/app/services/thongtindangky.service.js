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
