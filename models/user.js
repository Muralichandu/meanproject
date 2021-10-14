const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    Username: {
        type: String,
        required: true,
    },

    Password: {
        type: String,
    },

    Email:{
        type:String,
    },
    
    PhoneNumber:{
        type:Number
    }
  
})

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

exports.User = mongoose.model('User', userSchema);
