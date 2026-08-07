import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoURI);

        console.log("MongoDB connected");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
};
