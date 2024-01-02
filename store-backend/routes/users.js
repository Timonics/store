const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createNewUser,
  getUser,
  deleteUser,
  updateUser,
  userLogin,
} = require("../controllers/usersController");

router.get("/", getAllUsers);
router.post("/register", createNewUser);

router
  .route("/:userID")
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser);

router.post("/login", userLogin);

module.exports = router;
