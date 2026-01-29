const express = require("express");
require("dotenv").config()
const ConnectDb = require("./src/config/db.js")
const UserRouter = require("./src/routes/UserRoutes.js")
const PasswordRouter = require('./src/routes/ForgetPassword.js')
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000 ;

ConnectDb()
app.use(express.json())

app.use(cors({
  origin: 'http://localhost:5173', // frontend URL
  credentials: true,               // allow cookies / auth headers
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/',(req,res)=>{
    res.status(200).json({message:"App is runing fine"})
})

app.use('/api',UserRouter)
app.use('/api',PasswordRouter)
app.listen(PORT , ()=>{
    console.log(`app is runing on port ${PORT}`)
})