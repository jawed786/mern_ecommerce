import axios from "axios";
import React,{useEffect,useState} from "react"
import StripeCheckout from 'react-stripe-checkout';

 const Pay=()=>{
  const [stripeToken, setStripeToken]=useState(null);
   const  onToken = (token) => {
        setStripeToken(token)
      }

    useEffect(()=>{
      const makeRequest=async()=>{
        try{
         const res=await axios.post("http://localhost:5000/api/checkout/payment",{
            tokenId:stripeToken.id,
            amount: 500
         })
         console.log(res.data);
        }catch(err){
            console.log('stripeErr',err)
        }
      }
      makeRequest();
    },[stripeToken])
    return(
        <div>
          <h1>Pay</h1>
            <StripeCheckout
              token={onToken}
              stripeKey="pk_test_51OJw8WSIyD2ynkRZg6y41LQ1PkgZ0NJMBpjcI5H2tufQ8A6rqwvXoi05ZUt2gYljwG2Nrw5WjP5m1XIR6S6k7G5C00VFCdV4ou"
              name="sajid clothes"
              billingAddress
              shippingAddress
          >
              <button>Pay</button>
          </StripeCheckout>
        </div>
    )
 }

 export default Pay