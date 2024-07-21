import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js"


// @desc Fetch all products
// @route GET api/products
// @access public
const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find({});  // to get  all products from database we used product modelSchma to aavoid getting products from fake api we have made in data.js
    console.log(products); // Add this line to debug
    res.json(products);
});



// @desc Fetch a products
// @route GET api/products/:id
// @access public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    console.log('Fetched Product:', product); // Log to check product details
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "404 Not Found" });
    }
});

export {getProducts, getProductById}