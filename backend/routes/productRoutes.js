import express from "express"
import { getProducts, getProductById } from "../controller/productController.js";
const routes = express.Router();



// for our whole products 
routes.route("/").get(getProducts);

// for single product
routes.route("/:id").get(getProductById);


export default routes;