const { Category } = require("../models/category");

const getAllCategory = async (req, res) => {
  try {
    const categoryList = await Category.find();
    if (categoryList.length == 0) return res.status(400).send("No categories found");

    res.status(200).send(categoryList);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const createNewCategory = async (req, res) => {
  try {
    let newCategory = new Category({
      name: req.body.name,
      color: req.body.color,
      icon: req.body.icon,
      image: req.body.image,
    });
    const category = await newCategory.save();
    if (!category) return res.status(400).send("category not created");
    res.status(201).send(category);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const getCategory = async (req, res) => {
  try {
    const { categoryID } = req.params;
    const singleCategory = await Category.findById(categoryID);
    if (!singleCategory)
      return res.status(400).send("The specified category does not exist");

    res.status(200).send(singleCategory);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { categoryID } = req.params;
    const deletedCategory = await Category.findByIdAndDelete(categoryID);
    if (!deletedCategory)
      return res.status(400).send("The specified category does not exist");

    res.status(200).send("The category has been deleted");
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { categoryID } = req.params;
    const { name, color, icon, image } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryID,
      {
        name,
        color,
        icon,
        image,
      },
      { new: true }
    );
    if (!updatedCategory) return res.status(400).send("Error....");

    res.status(200).send(updatedCategory);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};

module.exports = {
  getAllCategory,
  createNewCategory,
  getCategory,
  deleteCategory,
  updateCategory,
};
