const Joi = require('joi');

const productSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(0).max(255).optional(),
    price: Joi.number().min(0).required(),
    category: Joi.string().valid("Footwear", "Clothing", "Electronics").required()
})

module.exports = { productSchema };