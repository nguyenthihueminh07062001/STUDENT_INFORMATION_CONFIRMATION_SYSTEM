const { ObjectId } = require("mongodb");

class SinhVienService {
  extractSinhVienData(payload) {
    const sinhvien = {
      TenTaiKhoan: payload.TenTaiKhoan,
      MSSV: payload.MSSV,
      HoTen: payload.HoTen,
      Email: payload.Email,
      SoDienThoai: payload.SoDienThoai,
      NgaySinh: payload.NgaySinh,
      GioiTinh: payload.GioiTinh,
      DiaChi: payload.DiaChi,
      SoCMND: payload.SoCMND,
      DanToc: payload.DanToc,
      MaLop: payload.MaLop,
      MaNganh: payload.MaNganh,
      TenNganh: payload.TenNganh,
      TenKhoa: payload.TenKhoa,
      KhoaHoc: payload.KhoaHoc,
      HeDaoTao: payload.HeDaoTao,
      TrangThaiSinhVien: payload.TrangThaiSinhVien,
      LuotXacNhan: payload.LuotXacNhan,
      MaBaoHiemYTe: payload.MaBaoHiemYTe,
      NgaySuDungBH: payload.NgaySuDungBH,
      NgayHetHanBH: payload.NgayHetHanBH,
      NoiDangKyKhamBH: payload.NoiDangKyKhamBH,
      //LuotXacNhan: payload.LuotXacNhan,
      GioiTinh: payload.GioiTinh,
    };
    // remove undifined filds
    Object.keys(sinhvien).forEach(
      (key) => sinhvien[key] === undefined && delete sinhvien[key]
    );
    return sinhvien;
  }
  constructor(client) {
    this.SinhVien = client.db().collection("sinhVien");
    this.BieuMau = client.db().collection("bieuMau");
  }

  async find(filter) {
    const curson = await this.SinhVien.find(filter);
    return await curson.toArray();
  }
  async findAllForm() {
    const acc = await this.sinhVien.findOne({
      name: { $regex: new RegExp(data.MaBieuMau), $options: "i" },
    });
    var dataAcc = {};
    dataAcc = await this.SinhVien.findOne({
      MaBieuMau: acc.MaBieuMau,
    });

    return { ...dataAcc };
  }

  // async update(id, payload){
  //     console.log(payload);
  //     const filter = {
  //         _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
  //     };
  //     const update = this.extractTaiKhoanData(payload);
  //     const result = await this.TaiKhoan.findOneAndUpdate(
  //         filter,
  //         {$set: update},
  //         {returnDocument: "after"}
  //     );
  //     return result.value;
  // }

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

module.exports = SinhVienService;
