const express = require("express");
const router = express.Router();
const {
  getAllOrders,
  createNewOrder,
} = require("../controllers/ordersController");

router
  .route("/")
  .get(getAllOrders)
  .post(createNewOrder);

module.exports = router;
