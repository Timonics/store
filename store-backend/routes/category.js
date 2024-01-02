const express = require("express");
const router = express.Router();
const {
  getAllCategory,
  createNewCategory,
  getCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");

router
  .route("/")
  .get(getAllCategory)
  .post(createNewCategory);

router
  .route("/:categoryID")
  .get(getCategory)
  .delete(deleteCategory)
  .put(updateCategory);

module.exports = router;
