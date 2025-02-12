const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongo db connect");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;