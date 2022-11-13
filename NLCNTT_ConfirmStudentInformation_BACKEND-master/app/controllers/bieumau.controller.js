const BieuMauService = require("../services/bieumau.service");
const ApiError = require("../api-error");
const MongoDB = require("../utils/mongodb.util");

exports.findAll = async (req, res, next) => {
  let documents = [];

  try {
    const bieuMauService = new BieuMauService(MongoDB.client);
    documents = await bieuMauService.find({});
    console.log(documents);
  } catch (error) {
    return next(new ApiError(500, "Đã xảy ra lỗi khi truy xuất biểu mẫu"));
  }

  return res.send(documents);
};

exports.findOne = async (req, res, next) => {
  try {
    console.log(123);
    const bieuMauService = new BieuMauService(MongoDB.client);
    const document = await bieuMauService.findById(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Không tìm thấy biểu mẫu"));
    }
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(
        500,
        `Đã xảy ra lỗi khi truy xuất biểu mẫu với id=${req.params.id}`
      )
    );
  }
};

exports.update = async (req, res, next) => {
  console.log(111);
  if (Object.keys(req.body).length === 0) {
    return next(new ApiError(400, "Dữ liệu để cập nhật không được rỗng"));
  }
  try {
    const bieuMauService = new BieuMauService(MongoDB.client);
    const document = await bieuMauService.update(req.params.id, req.body);
    console.log(req.body);
    if (!document) {
      return next(new ApiError(404, "Không tìm thấy biểu mẫu"));
    }
    return res.send({ message: "Biểu mẫu đã được cập nhật thành công" });
  } catch (error) {
    return next(
      new ApiError(500, `Lỗi cập nhật biễu mẫu với id=${req.params.id}`)
    );
  }
};
//delete //
exports.delete = async (req, res, next) => {
  try {
    const bieuMauService = new BieuMauService(MongoDB.client);
    const document = await bieuMauService.delete(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Không tìm thấy biểu mẫu"));
    }
    console.log(document);
    return res.send({ message: " Biểu mẫu đã được xóa thành công " });
  } catch (error) {
    return next(
      new ApiError(500, `Không thể xóa biểu mẫu với  id=${req.params.id}`)
    );
  }
};

//create and save a new forms
exports.create = async (req, res, next) => {
  console.log(req.body);

  try {
    const bieuMauService = new BieuMauService(MongoDB.client);
    const document = await bieuMauService.create(req.body);
    return res.send(document);
  } catch (error) {
    return next(new ApiError(500, "Lỗi trong khi tạo biểu mẫu"));
  }
};
