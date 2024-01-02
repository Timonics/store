const { Product } = require("../models/products");
const { Category } = require("../models/category");

const getAllProducts = async (req, res) => {
  try {
    //filtering for the product category if query is present
    let filteredCategories = {};
    if (req.query.categories) {
      filteredCategories = { category: req.query.categories.split(",") };
    }
    //populating the categories property of each product
    const productList = await Product.find(filteredCategories).populate(
      "category"
    );
    if (productList.length == 0)
      return res.status(400).send("No products found");

    res.status(200).send(productList);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const createNewProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      richDescription,
      image,
      images,
      brand,
      price,
      category,
      countInStock,
      rating,
      isFeatured,
      dateCreated,
    } = req.body;
    const cate = await Category.findById(category);
    if (!cate) return res.status(400).send("Invalid category ID");

    const catId = cate._id;

    // Create a new product with the data from the request body and set the category to the obtained _id
    let newProduct = new Product({
      name,
      description,
      richDescription,
      image,
      images,
      brand,
      price,
      category: catId,
      countInStock,
      rating,
      isFeatured,
      dateCreated,
    });
    //saving to the db
    const product = await newProduct.save();
    if (!product) return res.status(400).send("product not created");
    res.status(201).send(product);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const getProduct = async (req, res) => {
  try {
    const { productID } = req.params;
    //populate the category
    const singleProduct = await Product.findById(productID).populate(
      "category"
    );
    if (!singleProduct)
      return res.status(400).send("The specified product does not exist");

    res.status(200).send(singleProduct);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { productID } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(productID);
    if (!deletedProduct)
      return res.status(400).send("The specified product does not exist");

    res.status(200).send("The product has been deleted");
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { productID } = req.params;
    const {
      name,
      description,
      richDescription,
      image,
      images,
      brand,
      price,
      category,
      countInStock,
      rating,
      isFeatured,
      dateCreated,
    } = req.body;

    const cate = await Category.findById(category);
    if (!cate) return res.status(400).send("Invalid category ID");

    const catId = cate._id;

    const updatedProduct = await Product.findByIdAndUpdate(
      productID,
      {
        name,
        description,
        richDescription,
        image,
        images,
        brand,
        price,
        category: catId,
        countInStock,
        rating,
        isFeatured,
        dateCreated,
      },
      { new: true }
    );
    if (!updatedProduct) return res.status(400).send("Error....");

    res.status(200).send(updatedProduct);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const getTotalProductCount = async (req, res) => {
  const productCount = await Product.countDocuments();
  if (!productCount) res.status(500).json({ success: false });

  res.status(200).json({ productCount });
};

const getFeaturedProducts = async (req, res) => {
  //set count to 0 if there is no params
  const count = req.params.count ? req.params.count : 0;

  //limiting number of products sent.
  const featuredProduct = await Product.find({ isFeatured: true }).limit(
    Number(count)
  );
  if (!featuredProduct) res.status(500).json({ success: false });

  res.status(200).json({ featuredProduct });
};

module.exports = {
  getAllProducts,
  createNewProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  getTotalProductCount,
  getFeaturedProducts,
};
