const express = require('express');
const ProductModel = require('./model');

const router = express.Router();

//localhost:5000/api/product?page=3&limit=3
router.get("/", async (req, res,next) => {
    //reading query parameter for pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    try {
        const skip = (page - 1) * limit;
        const products = await ProductModel.find().skip(skip).limit(limit);
        throw new Error("test")
        const totalProducts = await ProductModel.countDocuments();
        res.send({ products, currentpage: page, totalPages: Math.ceil(totalProducts / limit) })
    } catch (error) {
        next(error)
       // res.status(500).send({ message: "Server Error", error })
    }
})

router.post("/", async (req, res,next) => {
    try {
        const { name, price, quantity } = req.body;
        if (!name) {
            throw new Error("Name can not be Empty")
        }
        const newProduct = new ProductModel({ name, price, quantity });


        const resp = await newProduct.save();
        res.send({ message: "Saved", resp })
    } catch (error) {
        next(error)
        // res.send(error)
    }
})

module.exports = router