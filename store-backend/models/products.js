const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  richdescription: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  images: [
    {
      type: String,
    },
  ],
  brand: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  countInStock: {
    type: Number,
    min: 0,
    max: 255,
  },
  rating: {
    type: Number,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

//adding a virtual id property (frontend friendly)
productSchema.virtual("id").get(function() {
  return this._id.toHexString()
})

productSchema.set("toJSON", {
  virtuals: true
})

exports.Product = mongoose.model("Product", productSchema);
