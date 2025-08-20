import express from 'express';
import { createCar, deleteCar, getAllcars, getcarById, updateCar } from '../controllers/carsController.js';

const carRoutes = express.Router()

carRoutes.post('/',createCar);
carRoutes.get('/',getAllcars)
carRoutes.get('/:id',getcarById)
carRoutes.put('/:id',updateCar)
carRoutes.delete('/:id',deleteCar)





export default carRoutes