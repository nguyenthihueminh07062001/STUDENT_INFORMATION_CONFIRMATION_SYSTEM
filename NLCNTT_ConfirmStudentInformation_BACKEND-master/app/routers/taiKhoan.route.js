const express = require("express");
const taiKhoan = require("../controllers/taikhoan.controller");

const router = express.Router();

router.route("/")
    .post(taiKhoan.login)
    .get(taiKhoan.findAll);


// router.route("/:id")
//     .delete(taiKhoan.delete)
//     .put(taiKhoan.update)
//     .get(taiKhoan.findOne)
    
//     ;

module.exports = router; 