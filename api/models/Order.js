const mongoose=require('mongoose')

const orderSchema=new mongoose.Schema({
    userid:{type:String ,required:true, unique:true},
    products:[{
        productId:{type:String},
        quantity:{
            type:Number,
            default:1
        }
    }],
    amount:{type:Number,required:true},
    address:{type:Object, required:true}
},{timestamps:true})


module.exports = mongoose.model("Order", orderSchema);






/*
{
    "title": "long kurti",
    "desc": "test",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPISZQhy9yNHA3jie6Yfwk9EExGaQTV9njnCvN62EDQ_G2zuYAgyIw_5GtJHUCA7s4_7I&usqp=CAU",
    "categories": ["tshirt","woman" ],
    "size": "M",
    "color": "white",
    "price": 300,
    "inStock":"true"
},
{
    "title": "stylish jacket",
    "desc": "test",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX5BNqOQf1AJ6yTCsVDlSHrAQzDgkwrGqWnw&usqp=CAU",
    "categories": ["tshirt","woman" ],
    "size": "S",
    "color": "yellow",
    "price": 300
},
{
    "title": "stylish coat",
    "desc": "test",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tMPFmnuOtGzDk2MNfw6eOnk3sbGX5telGg&usqp=CAU",
    "categories": ["tshirt","woman" ],
    "size": "L",
    "color": "black",
    "price": 300
},
{
    "title": "stylish shirt",
    "desc": "test",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc10hov-EHNxJYYJvATB-kqEaj4KLuHXM-3A&usqp=CAU",
    "categories": ["shirt","man" ],
    "size": "L",
    "color": "blue",
    "price": 300
},
{
    "title": "stylish tshirt",
    "desc": "test",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3w7gYURJmYuB8ODNwe15sNGoaeRhiYd4WIIuMQNDTysm6t1pJF0aO53e4rmyeNEEjWc&usqp=CAU",
    "categories": ["tshirt","man" ],
    "size": "M",
    "color": "white",
    "price": 300
},
{
    "title": "stylish jacket",
    "desc": "test",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPZ-V3CkRul7XsfBVxGERvJdidtdyb_O_EPg&usqp=CAU",
    "categories": ["jacket","man" ],
    "size": "S",
    "color": "blue",
    "price": 300
}
*/