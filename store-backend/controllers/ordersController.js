const { Orders } = require("../models/orders");
const { OrderItem } = require("../models/order-item");

const getAllOrders = async (res, req) => {
  try {
    //populate the user's name in the orders list
    const orderList = await Orders.find()
      .populate("user", "name")
      .sort({ dateCreated: -1 });
    if (!orderList) return res.status(400).send("No orders found");

    res.status(200).send(orderList);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const createNewOrder = async (req, res) => {
  try {
    //map through array of order items(cart) and get id of each item
    //resolving all array of promises into one promise
    const orderItemsIds = Promise.all(
      orderItems.map(async (orderItem) => {
        let newOrderItem = new OrderItem({
          quantity: orderItem.quantity,
          product: orderItem.product,
        });

        newOrderItem = await newOrderItem.save();

        return newOrderItem._id;
      })
    );

    const orderItemsIdsResolved = await orderItemsIds;

    const totalResolvedPrice = Promise.all(
      orderItemsIdsResolved.map(async (orderItemsId) => {
        const orderItem = await OrderItem.findByID(orderItemsId).populate(
          "product",
          "price"
        );
        const totalprice = orderItem.product.price * orderItem.quantity;
        return totalprice;
      })
    );

    const totalPrices = await totalResolvedPrice;

    const totalPrice = totalPrices.reduce((a, b) => a + b);

    const {
      orderItems,
      shippingAddress1,
      shippingAddress2,
      city,
      zip,
      country,
      phone,
      status,
      user,
      dateCreated,
    } = req.body;

    let newOrder = new Orders({
      orderItemsIdsResolved,
      shippingAddress1,
      shippingAddress2,
      city,
      zip,
      country,
      phone,
      status,
      totalPrice,
      user,
      dateCreated,
    });

    newOrder = await newOrder.save();
    if (!newOrder) return res.status(400).send("order not created");
    res.status(201).send(newOrder);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const getOrder = async (req, res) => {
  try {
    const { orderID } = req.params;
    const singleOrder = Orders.findByID(orderID)
      .populate("user")
      .populate({
        path: "orderItems",
        populate: {
          path: "product",
          populate: "catgory",
        },
      });
    if (!singleOrder)
      return res.status(400).send("The specified order does not exist");

    res.status(200).send(singleOrder);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { orderID } = req.params;
    const { status } = req.body;

    const updatedOrder = await Orders.findByIdAndUpdate(
      orderID,
      {
        status,
      },
      { new: true }
    );
    if (!updatedOrder) return res.status(400).send("Error....");

    res.status(200).send(updatedOrder);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { orderID } = req.params;
    Orders.findByIdAndDelete(orderID).then(async (order) => {
      if (order) {
        await order.OrderItem.map(async (orderItem) => {
          await OrderItem.findByIdAndDelete(orderItem);
        });
        res.status(200).send("The order-item has been deleted");
      } else
        return res.status(400).send("The specified order-item does not exist");
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const getTotalSales = async (req, res) => {
  try {
    const totalSales = await Orders.aggregate([
      { $group: { _id: null, totalsales: "$totalPrice" } },
    ]);

    if (!totalSales)
      return res.status(400).send("The order sales cannot be generated");

    res.status(200).send({ totalsales: totalSales.pop().totalsales });
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const getTotalOrderCount = async (req, res) => {
  const orderCount = await Orders.countDocuments((count) => count);
  if (!orderCount) res.status(500).json({ success: false });

  res.status(200).json({ orderCount });
};

const getUserOrders = async (req, res) => {
  try {
    const { userID } = req.params;
    const userOrders = Orders.find({ userID })
      .populate("user")
      .populate({
        path: "orderItems",
        populate: {
          path: "product",
          populate: "catgory",
        },
      });
    if (!userOrders)
      return res.status(400).send("The specified order does not exist");

    res.status(200).send(userOrders);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

module.exports = {
  getAllOrders,
  createNewOrder,
  getOrder,
  updateOrder,
  deleteOrder,
  getTotalSales,
  getTotalOrderCount,
  getUserOrders,
};
