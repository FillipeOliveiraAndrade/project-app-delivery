class CustomError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.stack = statusCode;
  }
}

module.exports = CustomError;