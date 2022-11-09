const { ObjectId } = require("mongodb");

class TaiKhoanService {
  extractTaiKhoanData(payload) {
    const taikhoan = {
      tenTaiKhoan: payload.tenTaiKhoan,
      matKhau: payload.matKhau,
    };
    // remove undifined filds
    Object.keys(taikhoan).forEach(
      (key) => taikhoan[key] === undefined && delete taikhoan[key]
    );
    return taikhoan;
  }
  constructor(client) {
    this.TaiKhoan = client.db().collection("taiKhoan");
  }

  async find(filter) {
    const curson = await this.TaiKhoan.find(filter);
    return await curson.toArray();
  }
  // async findByName(name){
  //     return await this.find({
  //         name: {$regex: new RegExp(name), $options: "i"},
  //     });
  // }

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

  async login(payload) {
    const taikhoan = this.extractTaiKhoanData(payload);
    const result = await this.TaiKhoan.findOne({
      TenTaiKhoan: taikhoan.tenTaiKhoan,
      MatKhau: taikhoan.matKhau,
    });
    return result;
  }
  async delete(id) {
    const result = await this.TaiKhoan.findOneAndDelete({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
    return result.value;
  }

  async deleteAll() {
    const result = await this.TaiKhoan.deleteMany({});
    return result.deletedCount;
  }

  // dinh nghia cac phuong thuc truy xuat CSDL su dung mongodb API
}

module.exports = TaiKhoanService;
