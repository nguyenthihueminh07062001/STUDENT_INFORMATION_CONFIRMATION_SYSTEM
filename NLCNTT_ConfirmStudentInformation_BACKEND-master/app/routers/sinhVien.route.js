const express = require("express");
const sinhVien = require("../controllers/sinhvien.controller");

const router = express.Router();

router
  .route("/")
  .get(sinhVien.findAll);
  

  router.route("/qlyeucau").get(sinhVien.findAllForm)

module.exports = router;
