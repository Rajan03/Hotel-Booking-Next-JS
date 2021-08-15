import mongoose from "mongoose";

const connectDb = () => {
  if (mongoose.connection.readyState >= 1) return;
  mongoose
    .connect(process.env.DB_URI, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => console.log("Connected to DB"))
    .catch((err) => console.log("ERROR IN DB CONNECTION: " + err));
};

export default connectDb;
