import mongoose from "mongoose";

async function connectDB() {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}`);
        console.log(`Database connected to the host: ${connectionInstance.connection.host}`);
    } catch (err) {
        console.log(`Error occurred while connecting to DB: ${err.message}`);
        process.exit(1);
    }
}

export default connectDB;