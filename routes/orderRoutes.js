const fastify = require("fastify");
const {publishQueue} = require("../utils/rabbitmq");
const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");

module.exports = async function (fastify, opts) {

    fastify.post('/order', async (request, reply) => {
        try {
            const {userId, items } = request.body;
            
            const userExists = await User.findById(userId);
            if (!userExists) return reply.status(404).send({message: "invlaid user id"});
    
            let totalAmount = 0;
            for (const item of items) {
                const product = await Product.findById(item.productId);
                if (!product) return reply.status(404).send({message: "invalid product id"});
    
                totalAmount += product.price * item.quantity;
            }
    
            const order = new Order({userId, items, totalAmount});
            await order.save();
    
            reply.send(order);
            // await publishQueue("orderQueue", order);
            // reply.send({message: 'order received! Processing in the backgrond'});
        } catch (error) {
            reply.status(400).send({message: error.message});
        }
    })
}