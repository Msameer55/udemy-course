import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/productModel.js";
import connectDb from "./config/db.js";

dotenv.config();
connectDb();

const updateNumReviews = async () => {
    try {
        await Product.updateMany(
            { numReviews: { $exists: false } }, // Find documents where numReviews does not exist
            { $set: { numReviews: 0 } }         // Set numReviews to 0
        );
        console.log("Documents updated successfully.");
        process.exit();
    } catch (error) {
        console.error("Error occurred while updating documents:", error);
        process.exit(1);
    }
};

updateNumReviews();
