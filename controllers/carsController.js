import Cars from "../models/carsModel.js";


export async function createCar(req, res) {
  try {
    const car = new Cars(req.body);
    await car.save();
    res.status(201).json({
      success: true,
      message: "Car created successfully",
      data: car
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({
        success: false,
        message: "Car with this ID or Registration Number already exists",
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Error creating car",
        error: error.message
      });
    }
  }
}

export async function getAllcars (req,res){
    try {
        const cars = await Cars.find();
        res.status(200).json({
            success : true,
            cars : cars
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Cannot fetch cars",
            error : error.message
        })
    }
}