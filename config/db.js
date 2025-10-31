const mongoose = require('mongoose');

const connectDB = async () => {

    try {
        const conn = await mongoose.connect(
            process.env.DATABASE_URI.replace(
                "<PASSWORD>",
                process.env.DATABASE_PASSWORD
            )
        );
        console.log("MongoDb connected");
    } catch (error) {
        console.error("MongoDb connectin Error", error.message);
        process.exit(1);    }
};

module.exports=connectDB;