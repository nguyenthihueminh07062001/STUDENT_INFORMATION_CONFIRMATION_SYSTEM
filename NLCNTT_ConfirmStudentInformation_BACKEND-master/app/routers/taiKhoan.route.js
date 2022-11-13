const express = require("express");
const taiKhoan = require("../controllers/taikhoan.controller");

const router = express.Router();

router.route("/")
    .post(taiKhoan.login)
    .get(taiKhoan.findAll);

module.exports = router; 