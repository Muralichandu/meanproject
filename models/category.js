const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    ProductName: {
        type: String,
        required: true,
    },
    Brand: {
        type: String,
    },
    color: { 
        type: String,
    },
    Quantity:{
        type:String,
    },
    Price:{
        type:String,
    }
})


categorySchema.virtual('id').get(function () {
    return this._id.toHexString();
});

categorySchema.set('toJSON', {
    virtuals: true,
});

exports.Category = mongoose.model('Category', categorySchema);
