const express = require('express')
const {
  addProductToCart,
  deleteProductFromCart,
  getCartProducts,
} = require('../controller/cartController')
const {verifyUser} = require('../middleware/middleware')
const router = express.Router()

router
  .route('/')
  .get([verifyUser], getCartProducts)
  .post([verifyUser], addProductToCart)

router.route('/:id').delete([verifyUser], deleteProductFromCart)

module.exports = router
