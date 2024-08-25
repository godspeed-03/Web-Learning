import mongoose from 'mongoose';

async function connectDB() {
    try {
        const connectionIinstance = await mongoose.connect(`${process.env.MONGO_URL}`)
        console.log(`Database connected to the host : ${connectionIinstance.connection.host}`)
    } catch (err) {
        console.log(`Erroe occured while connecting to DB : ${err}`)
        process.exit(1);
    }

}

export default connectDB;