const express=require("express");
const {errorHandler} =require ('./middlewares/errorMiddlewares');

const products=require('./data/products');
const dotenv=require("dotenv");
const connectDb = require("./config/config");
dotenv.config();
connectDb();
const productRoutes=require('./routes/productRoute');
const orderRoutes=require('./routes/orderRoute');

const usersRoutes=require('./routes/UserRoute');


const app=express();
//middleware parser
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Node Server</h1>");

});


app.use('/api',productRoutes)
app.use('/api/users',usersRoutes)
app.use('/api/orders',orderRoutes)
app.get('/api/config/paypal',(req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID);
    
})
const PORT=8080;

app.listen(process.env.PORT ||PORT,()=>{
    console.log(`Server Running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`);

});
