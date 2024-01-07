const router=require('express').Router();
const { verifyToken,verifyTokenAndAuthorization ,verifyTokenAndAdmin} = require('./verifyToken.js');
const Order=require("../models/Order")

//CREATE ORDER

router.post("/",verifyToken,async(req,res)=>{
     const newOrder=new Order(req.body);
     try{
        const savedOrder=await newOrder.save();
        res.status(200).json(savedOrder);
     }catch(err){
        res.status(500).json(err);
     }
})

// UPDATE ORDER
router.put('/:id',verifyTokenAndAdmin,async(req,res)=>{
    
    try{
         const updatedOrder=await Order.findByIdAndUpdate(req.params.id,{
              $set:req.body
         },{new:true})
         res.status(200).json(updatedOrder);
    }catch(err){
         res.status(500).json(err)
    }
})

//DELETE ORDER

router.delete('/:id',verifyTokenAndAdmin, async (req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(201).json("Order has been deleted");
    }catch(err){
         res.status(400).json(err);
    }
})

//GET USER ORDERS

router.get("/find/:userId",verifyTokenAndAuthorization,async (req,res)=>{
     
    try{
       const orders= await Order.find({userId:req.params.userId});
       res.status(201).json(orders);
    }catch(err){
       res.status(400).json(err);
    }
 
})

// GET ALL ORDERS

router.get("/",async (req,res)=>{
    
    try{
      
       const orders=Order.find();
      res.status(200).json(orders);
    }catch(err){
       res.status(400).json(err);
    }
 
})


module.exports=router