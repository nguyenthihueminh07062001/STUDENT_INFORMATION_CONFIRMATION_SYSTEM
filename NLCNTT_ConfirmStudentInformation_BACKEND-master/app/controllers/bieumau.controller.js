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
    return next(
      new ApiError(500, "An error occurred while retrieving bieu mau")
    );
  }

  return res.send(documents);
};

exports.findOne = async (req, res, next) => {
  try {
    console.log(123);
    const bieuMauService = new BieuMauService(MongoDB.client);
    const document = await bieuMauService.findById(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Tai khoan not found"));
    }
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, `Error retrieving tai khoan with id=${req.params.id}`)
    );
  }
};

exports.update = async (req, res, next) => {
  console.log(111);
  if (Object.keys(req.body).length === 0) {
    return next(new ApiError(400, "Data to update can not be empty"));
  }
  try {
    const bieuMauService = new BieuMauService(MongoDB.client);
    const document = await bieuMauService.update(req.params.id, req.body);
    console.log(req.body);
    if (!document) {
      return next(new ApiError(404, "Bieu mau not found"));
    }
    return res.send({ message: "Bieu mau was updated successfully" });
  } catch (error) {
    return next(
      new ApiError(500, `Error updating bieu mau with id=${req.params.id}`)
    );
  }
};
//delete //
exports.delete = async (req, res, next) => {
  try {
    const bieuMauService = new BieuMauService(MongoDB.client);
    const document = await bieuMauService.delete(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Tai khoan not found"));
    }
    console.log(document);
    return res.send({ message: " Bieu mau da duoc xoa thanh cong " });
  } catch (error) {
    return next(
      new ApiError(500, `Khong the xoa bieu mau voi  id=${req.params.id}`
      )
    );
  }
};

//create and save a new forms
exports.create = async(req, res, next) =>{
    console.log(req.body);

    try{
        const bieuMauService = new BieuMauService(MongoDB.client);
        const document = await bieuMauService.create(req.body);
        return res.send(document);
    }catch (error){
        return next(
            new ApiError(500, "An error occurred while creatig the contact")
        );
    }
};

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
