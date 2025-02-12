const { Client } = require('@elastic/elasticsearch');
const esClient = new Client({
                    node: process.env.ELASTIC_ENDPOINT, 
                    auth: {
                        apiKey: process.env.ELASTIC_APIKEY
                    }
                });

const checkElastic = async () => {
    const health  = await esClient.cluster.health();
    console.log("Elastic Health", health.status);
}

module.exports = { esClient, checkElastic };