const express=require('express')
const route=express.Router();

route.get("/",(req,res,next)=>{
    res.json({"message":"list of products"})
})

route.post("/",(req,res,next)=>{
    const product={
        name:req.body.name,
        price:req.body.price
    }
    res.json({
        "message":"added product",
        "product":product
})
})

route.put("/:productId",(req,res,next)=>{
    res.json({
        "message":"updated product",
        "productId":req.params.productId
})
})

route.delete("/:productId",(req,res,next)=>{
    res.json({
        "message":"deleted product",
        "productId":req.params.productId
})
})

module.exports=route;