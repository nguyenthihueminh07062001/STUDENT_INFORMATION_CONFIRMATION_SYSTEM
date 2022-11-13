const ThongTinDangKyService = require("../services/thongtinDangKy.service");
const ApiError = require("../api-error");
const MongoDB = require("../utils/mongodb.util");

exports.findAll = async (req, res, next) => {
  let documents = [];
  try {
    const thongTinDangKyService = new ThongTinDangKyService(MongoDB.client);
    documents = await thongTinDangKyService.getAllThongTinDangKy();
  } catch (error) {
    return next(new ApiError(500, "Đã xảy ra lỗi khi truy xuất thoong tin đăng ký"));
  }

  return res.send(documents);
};
exports.create = async (req, res, next) => {

  try {
    const thongTinDangKyService = new ThongTinDangKyService(MongoDB.client);
    const documents = await thongTinDangKyService.create(req.body);
    return res.send(documents);
  } catch (error) {
    return next(new ApiError(500, "Đã xảy ra lỗi khi truy xuất thông tin đăng ký"));
  }

};

exports.update = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new ApiError(400, "Dữ liệu không thể rỗng"));
  }
  try {
    const thongTinDangKyService = new ThongTinDangKyService(MongoDB.client);
    const document = await thongTinDangKyService.update(
      req.params.id,
      req.body
    );
    if (!document) {
      return next(new ApiError(404, "Không thể tìm thấy thông tin đăng ký"));
    }
    return res.send({ message: "Thông tin đăng ký đã cập nhật thành công" });
  } catch (error) {
    return next(
      new ApiError(500, `Lỗi cập nhật với id=${req.params.id}`)
    );
  }
};
