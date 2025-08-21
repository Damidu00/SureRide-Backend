import Booking from '../models/booking.js'
import cars from '../models/carsModel.js'
import users from '../models/user.js'


export async function createBooking(req, res) {
  try {
    const { car, startDate, endDate, totalPrice } = req.body;
    const user = req.user.id;

    if (!car || !startDate || !endDate || !totalPrice) {
      return res.json({
        message: "All fields are required 😕"
      });
    }

    const booking = new Booking({
      user,
      car,
      startDate,
      endDate,
      totalPrice,
    });

    await booking.save();

    res.json({
      message: "Booking created successfully ✅",
      booking,
    });
  } catch (error) {
    res.json({
      message: "Booking not created ❌",
      error: error.message,
    });
  }
}

export async function getAllBookings(req, res) {
  try {
    const bookings = await Booking.find()
      .populate('user', 'firstName lastName email')
      .populate('car', 'brand model registrationNumber');
    res.status(200).json({
      success: true,
      bookings: bookings
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching bookings",
      error: error.message
    });
  }
}

export async function getbookingById(req, res) {
  try {
    const bookingId = req.params.id;
    const booking = await Booking.findById(bookingId)
      .populate('user', 'firstName lastName email')
      .populate('car', 'brand model registrationNumber');
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }
    res.status(200).json({
      success: true,
      booking: booking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching booking',
      error: error.message
    });
  }
}

