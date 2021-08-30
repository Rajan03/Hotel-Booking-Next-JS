import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Pleae Enter your name!"],
      maxLength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Pleae Enter e-mail!"],
      unique: true,
      validate: [validator.isEmail, "Plaese Enter a valid E-Mail"],
    },
    password: {
      type: String,
      required: [true, "Pleae Enter your password!"],
      minLength: [5, "Password must have minimum 5 characters"],
      select: false,
    },
    avatar: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    role: {
      type: String,
      required: true,
      enum: {
        values: ["public", "admin"],
        message: "Please provide user role!!",
      },
      default: "public",
    },
    resetPasswordToken: String,
    resetPasswordExpire: String,
  },
  { timestamps: true }
);

// Encrypting Password 
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next()
  }
  this.password = await bcrypt.hash(this.password, 10);
})
 
// Check Password (Setting a password in schema)
userSchema.methods.checkPassword = async function (inputPsw) {
  return await bcrypt.compare(inputPsw, this.password)
}

export default mongoose.models.User || mongoose.model("User", userSchema);
