const ampq = require('amqplib');

async function consumerQueue() {
    try {
        const connection = await ampq.connect(process.env.RABBITMQ_URL);
        const channel = await connection.createChannel();

        await channel.assertQueue('orderQueue',{ durable: true });
        console.log("order worker is waiting for messages");

        channel.consume('orderQueue',async (msg) => {
            if (msg != null) {
                const order = JSON.parse(msg.content.toString());
                console.log("Processing order", order);

                await new Promise((resolve)=> setTimeout(resolve, 3000 ));
                console.log("order processed successfully", order)

                channel.ack(msg);
            }
        })
        
    } catch (error) {
        console.log("error in order consumer", error);
    }
}

consumerQueue();