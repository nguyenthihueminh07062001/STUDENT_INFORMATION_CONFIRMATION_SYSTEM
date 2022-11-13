const SinhVienService = require("../services/sinhvien.service");
const ApiError = require("../api-error");
const MongoDB = require("../utils/mongodb.util");

exports.findAll = async (req, res, next) => {
  let documents = [];

  try {
    const sinhVienService = new SinhVienService(MongoDB.client);
    documents = await sinhVienService.find({});
    console.log(documents);
  } catch (error) {
    return next(new ApiError(500, "Đã xảy ra lỗi khi truy xuất sinh viên"));
  }

  return res.send(documents);
};
exports.findAllForm = async (req, res, next) => {
  let documents = [];

  try {
    const sinhVienService = new SinhVienService(MongoDB.client);
    documents = await sinhVienService.findAllForm({});
    console.log(documents);
  } catch (error) {
    return next(new ApiError(500, "Đã xảy ra lỗi khi truy xuất sinh viên"));
  }

  return res.send(documents);
};
