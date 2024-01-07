const User=require('../models/User.js')
const router=require('express').Router();
const cryptoJS=require('crypto-js');
const jwt=require('jsonwebtoken');


router.post('/register',async (req,res)=>{
     let newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password: cryptoJS.AES.encrypt(req.body.password,process.env.pass_sec).toString()
        
     });


     try{
      let savedUser=await newUser.save();
      res.status(400).send(savedUser);
     }catch(err){
         res.status(400).send(err);
     }
})


router.post('/login',async (req,res)=>{
    try{
      
        const user= await User.findOne({username:req.body.username})
        !user && res.status(400).json("wrong credential");
        const decryptedPass= cryptoJS.AES.decrypt(user.password,process.env.pass_sec);
        const password=decryptedPass.toString(cryptoJS.enc.Utf8);
        password!==req.body.password && res.status(400).json("wrong credential");
        const {password:clientpassword,...others}=user._doc;
        const accessToken=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.SEC_KEY,{expiresIn:"3d"});
        password===req.body.password && res.status(201).json({...others,accessToken});
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;