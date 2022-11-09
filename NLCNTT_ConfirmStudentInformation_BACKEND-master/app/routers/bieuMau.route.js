const express = require("express");
const bieuMau = require("../controllers/bieumau.controller");

const router = express.Router();

router
  .route("/")
  .get(bieuMau.findAll)
  .post(bieuMau.create);

router
  .route("/:id")
  .put(bieuMau.update)
  .get(bieuMau.findOne)
  .delete(bieuMau.delete);

module.exports = router;
