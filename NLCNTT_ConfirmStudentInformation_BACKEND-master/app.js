const express = require("express");
const ApiError = require("./app/api-error");

const taiKhoanRouter = require("./app/routers/taiKhoan.route");
const sinhVienRouter = require("./app/routers/sinhVien.route");
const bieuMauRouter = require("./app/routers/bieuMau.route");
// const thongTinBieuMauRouter = require("./app/routers/thongTinBieuMau.route");
const thongTinDangKyRouter = require("./app/routers/thongTinDangKy.route");

const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());
app.use("/api/taikhoan", taiKhoanRouter);
app.use("/api/sinhvien", sinhVienRouter);
app.use("/api/bieumau", bieuMauRouter);
// app.use("/api/thongtinbieumau", thongTinBieuMauRouter);
app.use("/api/thongtindangky", thongTinDangKyRouter);

//define error

app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

// app.use((req, res, next) => {
//   return next(new ApiError(404, "Resource not found"));
// });

module.exports = app;
