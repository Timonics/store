const { Orders } = require("../models/orders");
const { OrderItem } = require("../models/order-item");

const getAllOrders = async (res, req) => {
  try {
    const orderList = await Orders.find();
    if (!orderList) return res.status(400).send("No orders found");

    res.status(200).send(orderList);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const createNewOrder = async (req, res) => {
  try {
    //map through array of order items and get id of each item
    //resolving all array of promises into one promise
    const orderItemsIds = Promise.all(orderItems.map(async orderItem => {
      let newOrderItem = new OrderItem({
        quantity: orderItem.quantity,
        product: orderItem.product
      })

      newOrderItem = await newOrderItem.save()

      return newOrderItem._id
    }))

    const orderItemsIdsResolved = await orderItemsIds

    const {
      orderItems,
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

module.exports = {
  getAllOrders,
  createNewOrder
};
