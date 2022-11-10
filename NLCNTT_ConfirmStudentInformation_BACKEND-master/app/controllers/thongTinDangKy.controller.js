const ThongTinDangKyService = require("../services/thongtinDangKy.service");
const ApiError = require("../api-error");
const MongoDB = require("../utils/mongodb.util");

exports.findAll = async (req, res, next) => {
  let documents = [];
  try {
    const thongTinDangKyService = new ThongTinDangKyService(MongoDB.client);
    documents = await thongTinDangKyService.getAllThongTinDangKy();
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while retrieving tt bieu mau")
    );
  }

  return res.send(documents);
};
exports.create = async (req, res, next) => {

  try {
    const thongTinDangKyService = new ThongTinDangKyService(MongoDB.client);
    const documents = await thongTinDangKyService.create(req.body);
    return res.send(documents);
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while retrieving tt bieu mau")
    );
  }

};

exports.update = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new ApiError(400, "Data to update can not be empty"));
  }
  try {
    const thongTinDangKyService = new ThongTinDangKyService(MongoDB.client);
    const document = await thongTinDangKyService.update(
      req.params.id,
      req.body
    );
    if (!document) {
      return next(new ApiError(404, "Bieu mau not found"));
    }
    return res.send({ message: "Bieu mau was updated successfully" });
  } catch (error) {
    return next(
      new ApiError(500, `Error updating tt bieu mau with id=${req.params.id}`)
    );
  }
};
