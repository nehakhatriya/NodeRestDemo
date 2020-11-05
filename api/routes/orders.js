const express=require('express')
const route=express.Router();

route.get("/",(req,res,next)=>{
    res.json({"message":"list of orders"})
})

route.post("/",(req,res,next)=>{
    const order={
        name:req.body.name,
      }
    res.json({
        "message":"added product",
        "order":order
})
})

route.put("/:orderId",(req,res,next)=>{
    res.json({
        "message":"updated order",
        "orderId":req.params.productId
})
})

route.delete("/:orderId",(req,res,next)=>{
    res.json({
        "message":"deleted order",
        "orderId":req.params.orderId
})
})

module.exports=route;