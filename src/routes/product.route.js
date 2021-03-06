const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.post('/addProduct',productController.insertProduct);

router.get('/getProduct',productController.getProduct);

module.exports = router;