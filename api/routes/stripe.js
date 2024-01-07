const router=require('express').Router();
const stripe = require('stripe')('sk_test_51OJw8WSIyD2ynkRZXT3pT4HRSbn2EEkIJztNhI2wFe6ef4eOQwE2vhEJVpfThc0fwzoRolGwUKj6gMexRKcrc3nz00HWnoL08I');
console.log(" before stripe created")

router.post('/payment' ,(req,res)=>{
  stripe.charges.create({
    source:req.body.tokenId,
    amount: req.body.amount,
    currency:'usd'
  },(stripeErr,stripeRes)=>{

    if(stripeErr){
      res.status(500).json(stripeErr)
    }else{
      res.status(200).json(stripeRes)
    }
  })
})

module.exports=router