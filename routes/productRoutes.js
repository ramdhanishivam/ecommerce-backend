const { esClient } = require('../config/elastic');
const Product = require('../models/product');
const { productSchema } = require('../utils/validation')

module.exports = async function (fastify, opts) {
    // Add a product
    fastify.post('/products', async (request, reply) => {
        const { error } = productSchema.validate(request.body)

        if (error) {
            reply.status(400).send({error: error.details})
        }

        const product = new Product(request.body);
        await product.save();

        // Index product in ElasticSearch
        await esClient.index({
            index: 'products',
            id: product._id.toString(),
            document: request.body
        });

        reply.send(product);
    })

    // get all products
    fastify.get("/products", async (request, reply) => {
        const products = await Product.find();
        reply.send(products);
    })

    fastify.get("/search", async (request, reply) => {
        const query = request.query;
        const result = await esClient.search({
            index: 'products',
            body: {
                query: {
                    match: {name: query}
                }
            }
        });
        reply.send(result.hits.hits.map(hit => hit._source));
    })
}
