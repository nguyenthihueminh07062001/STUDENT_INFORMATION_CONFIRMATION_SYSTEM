
const express = require("express");
const thongTinDangKy = require("../controllers/thongTinDangKy.controller");

const router = express.Router();

router.route("/").get(thongTinDangKy.findAll).post(thongTinDangKy.create);

router.route("/:id").put(thongTinDangKy.update);
module.exports = router;
