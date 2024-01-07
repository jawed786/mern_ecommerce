const express=require('express')
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const userRoute=require('./routes/user')
const authRoute=require('./routes/auth')
const productRoute=require("./routes/product")
const orderRoute=require("./routes/order")
const stripeRoute=require('./routes/stripe')
const cors=require('cors');
dotenv.config();
const url=process.env.dburl
mongoose.connect(url).then(()=>{
    console.log('DBconnection is successful');
}).catch((err)=>{
    console.log(err);
})
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoute);
app.use("/api/users",userRoute);
app.use("/api/products/",productRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout",stripeRoute);
app.listen(5000,()=>{
    console.log('backend server is running')
})