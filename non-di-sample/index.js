import express from 'express';
import { CouponController } from './controllers/coupon.controller.js';
import { ProductController } from './controllers/product.controller.js';

const app = express();

const productController = new ProductController();
app.post("/products/buy", productController.buyProduct);
app.post("/products/refund", productController.refundProduct);

const couponController = new CouponController();
app.post("/coupons/buy", couponController.buyCoupon);

app.listen(3000, () => {
  console.log("Server started");
});