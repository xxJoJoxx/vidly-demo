const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const Customer = mongoose.model('customer', new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    isGold: {
      type: Boolean,
      default: false
    },
    phone: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    }
  }));


  function validateCustomer(customer) {
    try {
      const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(5).max(50).required(),
        isGold: Joi.Boolean
      });
    
      return schema.validate(customer);
    } catch (error) {
      console.error(error.message);
    }
      
}

exports.Customer = Customer;
exports.validate = validateCustomer;