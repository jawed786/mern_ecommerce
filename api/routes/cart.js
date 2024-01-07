const router=require('express').Router();
const { verifyToken,verifyTokenAndAuthorization ,verifyTokenAndAdmin} = require('./verifyToken.js');
const Cart=require("../models/Cart")

//CREATE USER CART

router.post("/",verifyToken,async(req,res)=>{
     const newCart=new Cart(req.body);
     try{
        const savedCart=await newCart.save();
        res.status(200).json(savedCart);
     }catch(err){
        res.status(500).json(err);
     }
})

// update product
router.put('/:id',verifyTokenAndAuthorization,async(req,res)=>{
    
    try{
         const updatedCart=await Cart.findByIdAndUpdate(req.params.id,{
              $set:req.body
         },{new:true})
         res.status(200).json(updatedCart);
    }catch(err){
         res.status(500).json(err)
    }
})

//delete product

router.delete('/:id',verifyTokenAndAuthorization, async (req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(201).json("Cart has been deleted");
    }catch(err){
         res.status(400).json(err);
    }
})

//get  product

router.get("/find/:userId",async (req,res)=>{
     
    try{
       const cart= await Cart.findOne({userId:req.params.userId});
       res.status(201).json(cart);
    }catch(err){
       res.status(400).json(err);
    }
 
})

// GET ALL CARTS

router.get("/",verifyTokenAndAdmin,async (req,res)=>{
   
    try{
      
      const carts=await Cart.find();
      res.status(200).json(carts);
    }catch(err){
       res.status(400).json(err);
    }
 
})


module.exports=router