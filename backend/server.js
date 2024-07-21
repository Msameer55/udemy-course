import express from "express"
import connectDb from "./config/db.js"
import cors from "cors"
import dotenv from "dotenv"
import productRoutes from "./routes/productRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
dotenv.config();
const port = process.env.PORT || 5000;

connectDb(); // connect to mongodb

const app = express();


app.use(cors());  // cors is using to run both frontend and backend port if frontend and backend ports are different
app.get("/", (req, res) => {
    res.send("Hello World");
})


app.use("/api/products", productRoutes );
app.use(notFound);
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})



// want automatically run server without restarting and type npm start we install nodemon so after installinng we add    "server": "nodemon backend/server.js" in script in root package.json 
// to run command only for frontend we write 
        // "client": "npm start --prefix frontend" 

// to run command only for backend we write 
        // "server": "nodemon backend/server.js",

// to run both frontend and backend at same time and with one command 
// we write 
        // "dev" : "concurrently \"npm run server\" \"npm run client\" "

