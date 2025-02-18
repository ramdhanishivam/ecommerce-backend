const amqp = require("amqplib");

// Create a Publisher
async function publishQueue(queueName, message) {
    try {
        const connect = await amqp.connect(process.env.RABBITMQ_URL);
        const channel = await connect.createChannel();

        await channel.assertQueue(queueName, {durable: true});
        channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)), { persistent: true });

        console.log(`Send message to queue: ${queueName}`, message);
        setTimeout(()=>{
            connect.close();
        },500)
    } catch (error) {
        console.error("Error publishing to queue ",error.message)
    }
}

module.exports = { publishQueue };