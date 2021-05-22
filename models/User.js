const mongoose = require('mongoose');

// const opts = { toJSON: { virtuals: true } };

const UserSchema = mongoose.Schema({
    created_at :{
        type: Date,
        default : Date.now(),
    },
    updated_at : {
        type: Date,
        required : false,
    },
    nombre_completo :{
        type : String,
        required: true,
        trim: true,
    },
    email:{
        type : String,
        required : true,
        trim: true,
        unique : true,
    },
    telefono_cel : {
        type : String,
        required : true,
        trim: true,
    },
    active : {
        type: Boolean,
        default : true,
    }
});

module.exports = mongoose.model('User', UserSchema );