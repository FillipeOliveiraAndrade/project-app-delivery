class ErrorHandler {
  static handle(error, req, res, next) {
    if (error.stack) {
      return res.status(Number(error.stack)).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
    console.log('cathc errorHandle');
    next(error);
  }
}

module.exports = ErrorHandler;