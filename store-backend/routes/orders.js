const express = require("express");
const router = express.Router();
const {
  getAllOrders,
  createNewOrder,
  getOrder,
  updateOrder,
  deleteOrder,
  getTotalSales,
  getTotalOrderCount,
  getUserOrders
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

router.get("/get/totalsales", getTotalSales)

router.get("/get/totalorders", getTotalOrderCount)

router.get("get/userOrders/:userID", getUserOrders)

module.exports = router;
