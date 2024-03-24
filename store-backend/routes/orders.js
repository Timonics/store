const express = require("express");
const router = express.Router();
const {
  getAllOrders,
  createNewOrder,
  getOrder,
  updateOrder,
  deleteOrder
} = require("../controllers/ordersController");

router
  .route("/")
  .get(getAllOrders)
  .post(createNewOrder);

router
  .route("/:orderID")
  .get(getOrder)
  .put(updateOrder)
  .delete(deleteOrder)

module.exports = router;
