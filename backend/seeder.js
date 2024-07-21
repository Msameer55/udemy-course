import mongoose from "mongoose";
import dotenv from "dotenv"
import users from "./data/users.js"
import products from "./data/products.js";
import User from "./models/userModel.js"
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDb from "./config/db.js"


dotenv.config();
connectDb();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const creaatedUsers = await User.insertMany(users);

        const adminUser = creaatedUsers[0]._id;

        const sampleProduct = products.map((product) => {
            return {...product, user: adminUser}
        })

        await Product.insertMany(sampleProduct);
        console.log("Product Imported");
        process.exit(); 

    } catch (error) {
        console.log("Error occured", error);
        process.exit(1);
    }
}


const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log("Product Destroy");
        process.exit(); 

    } catch (error) {
        console.log("Error occured", error);
        process.exit(1);
    }
}

if(process.argv[2] === "-d"){
    destroyData();
}
else{
    importData();
}


// change the script to run seeder 
        // npm run data:import  for run seeder import 
//      "data:import" : "node backend/seeder.js",

        // npm run data:destroy  for run seeder destroy 
//     "data:destroy" : "node backend/seeder.js -d"