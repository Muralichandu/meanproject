const mongoose = require('mongoose')
const orderSchema = mongoose.Schema({
    zip:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    Addressone:{
        type:String,
        required:true
    },
    Addresstwo:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:pending
    },
    totalprice:{
        type:Number
    },
    dateordered:{
        type:Date,
        default:Date.now

    },
    orderitems :{
        type : mongoose.Schema.types.objectid,
        ref : 'orderitems'
    }
}) 

module.exports = mongoose.model('Order',orderSchema)