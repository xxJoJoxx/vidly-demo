const { genreSchema } = require('./genre');
const mongoose = require('mongoose');
const Joi = require('@hapi/joi');


const Movie = mongoose.model('movie', new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true, 
      minlength: 5,
      maxlength: 255
    },
    genre: { 
      type: genreSchema,  
      required: true
    },
    numberInStock: { 
      type: Number, 
      required: true,
      min: 0,
      max: 255
    },
    dailyRentalRate: { 
      type: Number, 
      required: true,
      min: 0,
      max: 255
    }
  }));

  function validateMovie(movie) {
      try {
        const schema = Joi.object({
        title: Joi.string().min(5).max(50).required(),
        genreId: Joi.objectId().required(),
        numberInStock: Joi.number().min(0).required(),
        dailyRentalRate: Joi.number().min(0).required()
        }); 
        return schema.validate(movie);     
      } catch (error) {
        console.error(error.message);
      }
    
}

exports.Movie = Movie; 
exports.validate = validateMovie;