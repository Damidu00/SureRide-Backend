import bodyParser from 'body-parser';
import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
import cors from 'cors'
import carRoutes from './routes/carsRoutes.js';
import multer from 'multer';
import path from 'path';
import userRouter from './routes/userRouter.js';
import bookingRouter from './routes/bookingRoutes.js';

dotenv.config()
const app = express();
const mongoUrl = process.env.MONGO_DB_URI
app.use(cors());
mongoose.connect(mongoUrl,{})
const connection = mongoose.connection; 

connection.once("open",() => {
    console.log("Database Connected!!");
})

// Multer setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Serve uploaded images statically
app.use('/uploads', express.static('uploads'));

app.use(bodyParser.json())
app.use((req,res,next)=>{

    const token = req.header("Authorization")?.replace("Bearer ","")
    
    if(token != null ){
        jwt.verify(token,process.env.SECRET,(error,decoded)=>{
            if(!error){
                req.user = decoded
            }
        })
    }

    next()

})

// Pass multer upload to carRoutes
app.use("/api/cars", (req, res, next) => {
    upload.single('image')(req, res, next);
}, carRoutes);
app.use("/api/users",userRouter)
app.use("/api/bookings",bookingRouter)


app.listen(5000,() =>{
    console.log('Server is running on port 5000')
})