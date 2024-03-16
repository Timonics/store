const { User } = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res) => {
  try {
    let usersList = await User.find().select("-password");
    if (!usersList) return res.status(400).send("No users found");

    res.status(200).send(usersList);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
}

const createNewUser =  async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      street,
      apartment,
      city,
      zip,
      country,
      phone,
      isAdmin,
    } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(409).send("User already exists.");
    let newUser = new User({
      name,
      email,
      password,
      passwordHash: bcrypt.hashSync(password, 10),
      street,
      apartment,
      city,
      zip,
      country,
      phone,
      isAdmin,
    });
    const user = await newUser.save();
    if (!user) return res.status(400).send("user not created");

    res.status(201).send(newUser);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
}

const getUser = async (req, res) => {
  try {
    const { userID } = req.params;
    const singleUser = await User.findById(userID);
    if (!singleUser)
      return res.status(400).send("The specified user does not exist...");

    res.status(200).send(singleUser);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
}

const deleteUser = async (req, res) => {
  try {
    const { userID } = req.params;
    const deletedUser = await User.findByIdAndDelete(userID);
    if (!deletedUser)
      return res.status(400).send("The specified user does not exist");

    res.status(200).send("The user has been deleted");
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
}

const updateUser = async (req, res) => {
  try {
    const { userID } = req.params;
    const {
      name,
      email,
      password,
      street,
      apartment,
      city,
      zip,
      country,
      phone,
      isAdmin,
    } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      userID,
      {
        name,
        email,
        password,
        passwordHash: bcrypt.hashSync(password, 10),
        street,
        apartment,
        city,
        zip,
        country,
        phone,
        isAdmin,
      },
      { new: true }
    );
    if (!updatedUser) return res.status(400).send("Error....");

    res.status(200).send(updatedUser);
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
}

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    const secret = process.env.JWT_SECRET_KEY;

    //comparing password and the hash
    if (user && bcrypt.compareSync(password, user.passwordHash)) {
      //if the user is true and password matches the hash
      //create a token for authentication and give it an expiry time
      const token = jwt.sign(
        {
          userId: user._id,
          isAdmin: user.isAdmin,
        },
        secret,
        { expiresIn: "1d" }
      );
      res.status(200).send({ user: user.email, token: token });
    } else {
      res.status(400).send("email/Password is wrong");
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
}

module.exports = {
  getAllUsers,
  createNewUser,
  getUser,
  deleteUser,
  updateUser,
  userLogin
}