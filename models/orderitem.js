const mongoose = require ('mongoose')
 const orderitemsSchema = mongoose.Schema({

    quantity :{
        type :Number,
        required : true
    },
    category:{
        type : mongoose.Schema.types.objectid,
        ref:'Category',
        required:true
    }
 })
 module.exports = mongoose.model('Orderitem',orderitemsSchema)