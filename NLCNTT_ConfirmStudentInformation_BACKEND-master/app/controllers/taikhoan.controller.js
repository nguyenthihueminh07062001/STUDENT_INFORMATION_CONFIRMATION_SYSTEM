const TaiKhoanService = require("../services/taikhoan.service");
const ApiError = require("../api-error");
const MongoDB = require("../utils/mongodb.util");

exports.findOne = async (req, res, next) => {
  try {
    const taikhoanService = new TaiKhoanService(MongoDB.client);
    const document = await taikhoanService.findById(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Không tìm thấy tài khoản"));
    }
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, `Đã xảy ra lỗi khi truy xuất với id=${req.params.id}`)
    );
  }
};

// exports.update = async (req, res, next) => {
//   if (Object.keys(req.body).length === 0) {
//     return next(new ApiError(400, "Dữ liệu để cập nhật không được rỗng"));
//   }
//   try {
//     const taikhoanService = new TaiKhoanService(MongoDB.client);
//     const document = await taikhoanService.update(req.params.id, req.body);
//     if (!document) {
//       return next(new ApiError(404, "Không tìm thấy tài khoản"));
//     }
//     return res.send({ message: "Tài khoản đã được cập nhật thành công" });
//   } catch (error) {
//     return next(
//       new ApiError(500, `Lỗi cập nhật tài khoản với id=${req.params.id}`)
//     );
//   }
// };
//
// exports.delete = async (req, res, next) => {
//   try {
//     const taikhoanServiceService = new TaiKhoanService(MongoDB.client);
//     const document = await taikhoanService.delete(req.params.id);
//     if (!document) {
//       return next(new ApiError(404, "Không tìm thấy tài khoản"));
//     }
//     return res.send({ message: " Tài khoản đã được xóa thành công " });
//   } catch (error) {
//     return next(
//       new ApiError(500, `Không thể xóa tài khoản với id=${req.params.id}`)
//     );
//   }
// };

// exports.deleteAll = async (_req, res, next) => {
//   try {
//     const taikhoanServiceService = new TaiKhoanService(MongoDB.client);
//     const deletedCount = await taikhoanService.deleteAll();
//     return res.send({
//       message: `${deletedCount} Tai khoan were deleted successfully`,
//     });
//   } catch (error) {
//     return next(
//       new ApiError(500, "An error occurred while removing all tai khoan")
//     );
//   }
// };

// exports.findAllFavorite = async (req, res, next) => {
//   try {
//     const taikhoanService = new TaiKhoanService(MongoDB.client);
//     const documents = await taikhoanService.findAllFavorite();
//     return res.send(documents);
//   } catch (error) {
//     return next(
//       new ApiError(500, "An error occurred while retrieving favorite tai khoan")
//     );
//   }
// };

//create and save a new tai khoan
exports.login = async (req, res, next) => {
  try {
    const taikhoanService = new TaiKhoanService(MongoDB.client);
    const document = await taikhoanService.login(req.body);
    if (document != null) {
      return res.send(document);
    } else {
      return res.send({ error: true });
    }
  } catch (error) {
    return next(
      new ApiError(500, "Lỗi trong khi đăng nhập")
    );
  }
};

//cai dat handler findAll
//retrieve all tai khoan of a use from the database
exports.findAll = async (req, res, next) => {
  let documents = [];

  try {
    const taikhoanService = new TaiKhoanService(MongoDB.client);
    const { name } = req.query;
    console.log(taikhoanService);
    if (name) {
      documents = await taikhoanService.findByName(name);
    } else {
      documents = await taikhoanService.find({});
    }
  } catch (error) {
    return next(new ApiError(500, "Đã xảy ra lỗi khi truy xuất tài khoản"));
  }

  return res.send(documents);
};
