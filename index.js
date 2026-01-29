const express = require("express");
require("dotenv").config()
const ConnectDb = require("./src/config/db.js")
const UserRoutes = require("./src/routes/UserRoutes.js")
const PasswordRoutes = require('./src/routes/ForgetPassword.js')
const adminRoutes = require('./src/routes/admin.route.js')
const userDietplanRoutes = require('./src/routes/UserDietplan.js')
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000 ;

ConnectDb()
app.use(express.json())

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,               
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/',(req,res)=>{
    res.status(200).json({message:"App is runing fine"})
})

app.use('/api',UserRoutes)
app.use('/api',PasswordRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/diet',userDietplanRoutes)
app.listen(PORT , ()=>{
    console.log(`app is runing on port ${PORT}`)
})