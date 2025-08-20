import Booking from "../models/booking.js";

export const createBooking = async (req, res) => {
  try {
    const { user, car, startDate, endDate, totalPrice } = req.body;

    if (!user || !car || !startDate || !endDate || !totalPrice) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const booking = new Booking({
      user,
      car,
      startDate,
      endDate,
      totalPrice,
    });
    const savedBooking = await booking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};