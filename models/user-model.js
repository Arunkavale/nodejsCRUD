var mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

let UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'User name is required']
    },
    email: {
      type: String,
      required: [true,'Email Address is Required'],
      trim: true,
      minlength: 5,
      unique: [true,'Email Address is already register'],
      validate: {
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email address'
      }
    },
    phone:{
        type:String,
        required:[true, 'Phone Number is required'],
        minlength: 10,
        validate: {
            validator: function(v) {
                return /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        }
    },
    deepartmet:{
      type:String,
      required:[true,'Deepartment name is required']
    },
},{timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' }});

UserSchema.plugin(uniqueValidator);


let User = mongoose.model('User', UserSchema);

module.exports = {User};


  




