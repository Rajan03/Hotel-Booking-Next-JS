import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Room name is required!!"],
      trim: true,
      maxLength: [100, "Name Value can't exceed 100 characters"],
    },
    pricePerNight: {
      type: Number,
      required: [true, "Price is required!!"],
      maxLength: [5, "Name Value can't exceed 100 characters"],
      default: 0.0,
    },
    description: {
      type: String,
      required: [true, "Description text is required!!"],
    },
    address: {
      type: String,
      required: [true, "Address is required!!"],
    },
    guestCapacity: {
      type: Number,
      required: [true, "Max. Guests Capacity is required!!"],
    },
    numOfBed: {
      type: Number,
      required: [true, "Total Beds is required!!"],
    },
    roomService: {
      type: Boolean,
      default: false,
    },
    internet: {
      type: Boolean,
      default: false,
    },
    breakfast: {
      type: Boolean,
      default: false,
    },
    airConditioned: {
      type: Boolean,
      default: false,
    },
    petsAllowed: {
      type: Boolean,
      default: false,
    },
    roomCleaning: {
      type: Boolean,
      default: false,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "Category of room is required!!"],
      enum: {
        values: [
          "King",
          "Queen",
          "Single",
          "Double",
          "Mini Suite",
          "Connecting",
          "Apartments",
        ],
        message: "Please Select a category for the room!!",
      },
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Room || mongoose.model("Room", roomSchema);
