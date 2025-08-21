import express from 'express';
import { createBooking, getAllBookings, getbookingById } from '../controllers/bookingController.js';

const bookingRouter = express.Router()

bookingRouter.post("/",createBooking)
bookingRouter.get("/",getAllBookings)
bookingRouter.get("/:id",getbookingById)




export default bookingRouter