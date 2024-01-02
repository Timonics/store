// Import the necessary modules and initialize the express router
const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createNewProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  getTotalProductCount,
  getFeaturedProducts,
} = require("../controllers/productsController");

router
  .route("/")
  .get(getAllProducts)
  .post(createNewProduct);

router
  .route("/:productID")
  .get(getProduct)
  .delete(deleteProduct)
  .put(updateProduct);

//product statistics: total number of products in the db
router.get("/get/count", getTotalProductCount);

//Filtering products with a condition and also limiting number of products sent.
router.get("/get/featured/:count", getFeaturedProducts);

// Export the router
module.exports = router;
