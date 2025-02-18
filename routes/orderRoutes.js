const fastify = require("fastify");
const {publishQueue} = require("../utils/rabbitmq");

module.exports = async function (fastify, opts) {

    fastify.post('/order', async (request, reply) => {
        const {userId, productId, quantity } = request.body;
        const order = {userId, productId, quantity, status: 'Pending', createdAt: new Date()};
        await publishQueue("orderQueue", order);
        reply.send({message: 'order received! Processing in the backgrond'});
    })
}