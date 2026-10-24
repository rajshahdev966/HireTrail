import mongoose from "mongoose";
import config from "./config";

const connectDb = async ()=> {
    await mongoose.connect(config.MONGO_URI);
    console.log("Database connected successfully");
}

export default connectDb;