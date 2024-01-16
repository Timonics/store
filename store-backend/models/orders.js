const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema({
  orderItems: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "OrderItem",
    }],
  shippingAddress1: {
    type: String,
  },
  shippingAddress2: {
    type: String,
  },
  city: {
    type: String,
    default: "",
  },
  zip: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  phone: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Pending",
  },
  totalPrice: {
    type: Number,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

ordersSchema.virtual("id").get(function() {
  return this._id.toHexString()
})

ordersSchema.set("toJSON", {
  virtuals: true
})

exports.Orders = mongoose.model("Orders", ordersSchema);
