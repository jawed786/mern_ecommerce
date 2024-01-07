const mongoose=require('mongoose')

const cartSchema=new mongoose.Schema({
    userid:{type:String ,required:true, unique:true},
    products:[{
        productId:{type:String},
        quantity:{
            type:number,
            default:1
        }
    }],
},{timestamps:true})


module.exports = mongoose.model("Cart", cartSchema);