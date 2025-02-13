import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set("strictQuery", true);

    // if the database is already connected, don't connect again
    if (connected) {
        console.log("MongoDB is connected");
        return;
    }
    // connect to Mongodb
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
    } catch (error) {
        console.log("MongoDB connection failed", error);
    }
};

export default connectDB;
