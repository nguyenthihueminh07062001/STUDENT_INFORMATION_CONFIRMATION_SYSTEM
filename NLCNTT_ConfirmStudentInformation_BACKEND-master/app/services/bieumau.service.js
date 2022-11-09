const { ObjectId } = require("mongodb");

class BieuMauService {
  extractBieuMauData(payload) {
    const bieuMau = {
      MaBieuMau: payload.MaBieuMau,
      TenBieuMau: payload.TenBieuMau,
    };
    // remove undifined filds
    Object.keys(bieuMau).forEach(
      (key) => bieuMau[key] === undefined && delete bieuMau[key]
    );
    return bieuMau;
  }
  constructor(client) {
    this.BieuMau = client.db().collection("bieuMau");
  }

  async find(filter) {
    const curson = await this.BieuMau.find(filter);
    return await curson.toArray();
  }
  async findById(id) {
    console.log(id);
    return await this.BieuMau.findOne({
      MaBieuMau: id,
    });
  }

  async update(id, payload) {
    const update = this.extractBieuMauData(payload);
    const result = await this.BieuMau.findOneAndUpdate(
      { _id: ObjectId.isValid(id) ? new ObjectId(id) : null },
      { $set: update },
      { returnDocument: "after" }
    );
    console.log(result.value);
    return result.value;
  }
  async delete(id) {
    console.log(id);
    const result = await this.BieuMau.findOneAndDelete({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
    return result.value;
  }

  async create(payload) {
    const bieuMau = this.extractBieuMauData(payload);
    const result = await this.BieuMau.insertOne(bieuMau);
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

module.exports = BieuMauService;
