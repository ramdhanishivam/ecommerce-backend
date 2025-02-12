const fastify = require('fastify')({logger: true});
require("dotenv").config();
const connectDB = require('./config/db');
fastify.register(require('./routes/productRoutes'));
const {checkElastic} = require('./config/elastic');

checkElastic();
connectDB();

fastify.get('/', async(request, reply)=>{
    return {message: "Ecommerce api is running"};
})

const start = async () => {
    try {
        await fastify.listen({port: 3000});
        console.log("server is running on fastify");
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

start();