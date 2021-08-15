class HandleError extends Error {
  constructor(errorMsg, statusCode) {
    super(errorMsg);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default HandleError;
