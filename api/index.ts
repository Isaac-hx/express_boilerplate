import express from "express"
import router from "../src/routes/karyawan.js"
import userRoutes from "../src/routes/user.js"
import cookieParser from 'cookie-parser';
import absensiRoutes from "../src/routes/absensi.js";
import morgan from "morgan";
import cors from 'cors'
import dotenv from "dotenv"
dotenv.config()

const PORT =  process.env.APP_PORT || 3000;
const app = express()

// Cors header
const corsOptions = {
  origin: "*", // Allowed origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // Enable cookies or other credentials
};


//Middleware wesbervices
app.use(cors(corsOptions));
app.use(cookieParser())
app.use(express.json())
app.use(morgan('combined'))
// Route webservices
app.use("/api/karyawan",router)
app.use("/api/users",userRoutes)
app.use("/api/absensi",absensiRoutes)
 


app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

export default app