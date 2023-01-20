const express=require("express");
const {errorHandler} =require ('./middlewares/errorMiddlewares');

const products=require('./data/products');
const dotenv=require("dotenv");
const connectDb = require("./config/config");
dotenv.config();
connectDb();
const productRoutes=require('./routes/productRoute');

const usersRoutes=require('./routes/UserRoute');


const app=express();
//middleware parser
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Node Server</h1>");

});


app.use('/api',productRoutes)
app.use('/api/users',usersRoutes)
const PORT=8080;

app.listen(process.env.PORT ||PORT,()=>{
    console.log(`Server Running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`);

});
