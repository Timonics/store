function errorHandler(err, req, res, next) {
  if (err.name == "UnauthorizedError") {
    res.status(401).json({ success: false, message: "The user is not authorized" });
  }

  if (err.name == "validationError") {
    res.status(401).json({ success: false, message: "The user is not autorized" });
  }

  return res.status(500).json(err)
}


module.exports = errorHandler