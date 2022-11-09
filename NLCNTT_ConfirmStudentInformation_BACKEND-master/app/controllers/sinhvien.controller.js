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
    return next(
      new ApiError(500, "An error occurred while retrieving tai khoan")
    );
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
    return next(
      new ApiError(500, "An error occurred while retrieving tai khoan")
    );
  }

  return res.send(documents);
};

// exports.findOne = async (req, res, next) => {
//   try {
//     const taikhoanService = new TaiKhoanService(MongoDB.client);
//     const document = await taikhoanService.findById(req.params.id);
//     if (!document) {
//       return next(new ApiError(404, "Tai khoan not found"));
//     }
//     return res.send(document);
//   } catch (error) {
//     return next(
//       new ApiError(500, `Error retrieving tai khoan with id=${req.params.id}`)
//     );
//   }
// };

// exports.update = async (req, res, next) => {
//   if (Object.keys(req.body).length === 0) {
//     return next(new ApiError(400, "Data to update can not be empty"));
//   }
//   try {
//     const taikhoanService = new TaiKhoanService(MongoDB.client);
//     const document = await taikhoanService.update(req.params.id, req.body);
//     if (!document) {
//       return next(new ApiError(404, "Tai khoan not found"));
//     }
//     return res.send({ message: "Tai khoan was updated successfully" });
//   } catch (error) {
//     return next(
//       new ApiError(500, `Error updating tai khoan with id=${req.params.id}`)
//     );
//   }
// };
// //
// exports.delete = async (req, res, next) => {
//   try {
//     const taikhoanServiceService = new TaiKhoanServiceService(MongoDB.client);
//     const document = await taikhoanService.delete(req.params.id);
//     if (!document) {
//       return next(new ApiError(404, "Tai khoan not found"));
//     }
//     return res.send({ message: " Tai khoan was deleted successfull " });
//   } catch (error) {
//     return next(
//       new ApiError(500, `Could not deleted tai khoan with id=${req.params.id}`)
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

// //create and save a new tai khoan
// exports.login = async (req, res, next) => {
//   try {
//     const taikhoanService = new TaiKhoanService(MongoDB.client);
//     const document = await taikhoanService.login(req.body);
//     if (document != null) {
//       return res.send(document);
//     } else {
//       return res.send({ error: true });
//     }
//   } catch (error) {
//     return next(
//       new ApiError(500, "An error occurred while creating the taif khoan")
//     );
//   }
// };

// //cai dat handler findAll
// //retrieve all tai khoan of a use from the database
