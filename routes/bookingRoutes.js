import express from 'express';
import { createBooking, getAllBookings, getAvailableCars, getbookingById } from '../controllers/bookingController.js';

const bookingRouter = express.Router()

bookingRouter.post("/",createBooking)
bookingRouter.get("/",getAllBookings)
bookingRouter.get('/available', getAvailableCars)
bookingRouter.get("/:id",getbookingById)




export default bookingRouter