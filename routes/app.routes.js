const productController = require('../controllers/products.controller');
const express = require("express");
const router = express.Router();

router.post("/products", productController.create);
router.get("/products", productController.finalAll);
router.get("/products/:id", productController.create);
router.put("/products/:id", productController.finalOne);
router.delete("/products/:id", productController.delete);

module.exports = router;