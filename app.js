const express=require('express')
const app=express();
const bodyParser=require('body-parser')

const productRoutes=require('./api/routes/products')
const orderRoutes=require('./api/routes/orders')

app.use(bodyParser.json())

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","*")
    if(req.method==="OPTIONS"){
        res.header("Access-Control-Allow-Methods","*")
    }
    next()
})

app.use("/products",productRoutes);
app.use("/orders",orderRoutes)

app.use((req,res,next)=>{
    const error=new Error("Not Found");
    error.status=404;
    next(error)
})

app.use((error,req,res,next)=>{
    res.status(error.status)
    res.json({
        "message":error.message
    })
})

module.exports=app;