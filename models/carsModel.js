import mongoose from "mongoose";

const carSchema = mongoose.Schema({
    carId: {
    type: String,
    required: true,
    unique: true
  },
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true
  },
  pricePerDay: {
    type: Number,
    required: true
  },
  availability: {
    type: Boolean,
    default: true
  },
  mileage: {
    type: Number
  },
  features: {
    type: [String]
  }
}, { timestamps: true });

const Car = mongoose.model("Car", carSchema);

export default Car