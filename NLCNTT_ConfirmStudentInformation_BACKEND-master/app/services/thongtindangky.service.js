const { ObjectId } = require("mongodb");

class ThongTinDangKyService {
  extractDangKyMauData(payload) {
    const thongTinDangKy = {
      ngayDangKy: payload.NgayDangKy,
      ngayDuyet: payload.NgayDuyet,
      trangThaiPheDuyet: payload.TrangThaiPheDuyet,
      nguoiDuyet: payload.NguoiDuyet,
      ghiChu: payload.GhiChu,
      soLuotXacNhan:payload.SoLuotXacNhan,
    };
    // remove undifined filds
    Object.keys(thongTinDangKyu).forEach(
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
  // async getAllOfThongTinBieuMau(){
  //   const resultAll = await this.ThongTinBieuMau.aggregate([
  //     {
  //       $lookup: {
  //         from: "thongTin",
  //         localField: "MaBieuMau",

  //         foreignField: "MaBieuMau",

  //         as: "allThongTin",
  //       },
  //     },
  //   ]);
  //   return await resultAll.toArray();
  // }

  // async findByName(name){
  //     return await this.find({
  //         name: {$regex: new RegExp(name), $options: "i"},
  //     });
  // }

  async update(id, payload) {
    console.log(payload);
    const filter = {
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    };
    const update = this.extractThongTinDangKyData(payload);
    const result = await this.ThongTinDangKy.findOneAndUpdate(
      filter,
      { $set: update },
      { returnDocument: "after" }
    );
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
