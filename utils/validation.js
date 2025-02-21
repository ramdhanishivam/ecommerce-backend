const Joi = require('joi');

const productSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(0).max(255).optional(),
    price: Joi.number().min(0).required(),
    category: Joi.string().valid("Footwear", "Clothing", "Electronics").required()
})

const orderSchema = Joi.object({
    userId: Joi.string().required(),
    items: Joi.array().items(Joi.object({
        productId: Joi.string().required(),
        quantity: Joi.number().min(1).required(),
        price: Joi.number().min(0).required(),
    })),
    totalAmount: Joi.number().min(0),
    status: Joi.string(),
    createdAt: Joi.date()
})

module.exports = { productSchema, orderSchema };