const User = require("../models/User");

module.exports = async function (fastify, opts) {
    fastify.post('/users', async (request, reply) => {
        try {
            const user = new User(request.body);
            await user.save();
            reply.send(user);
        } catch (error) {
            reply.status(400).send({error: error.message})
        }
    });

    fastify.get('/users', async (request, reply) => {
        try {
            const users = await User.find();
            reply.send(users);
        } catch (error) {
            reply.status(400).send({error: error.message})
        }
    })
}