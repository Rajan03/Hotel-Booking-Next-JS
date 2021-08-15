import HandleError from "../utils/errorHandler";

const errorResponse = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  // Wrong Mongo Id
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    const error = new HandleError(message, 400);
  }

  // Validation Error in Mongoose
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    const error = new HandleError(message, 400);
  }
  res.status(err.statusCode).json({
    success: false,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

export default errorResponse;
