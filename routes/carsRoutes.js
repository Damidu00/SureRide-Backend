import express from 'express';
import { createCar, getAllcars, getcarById, updateCar } from '../controllers/carsController.js';

const carRoutes = express.Router()

carRoutes.post('/',createCar);
carRoutes.get('/',getAllcars)
carRoutes.get('/:id',getcarById)
carRoutes.put('/:id',updateCar)



export default carRoutes