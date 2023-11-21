import express from "express";
import {ProductService} from "./services/product.service.js";
import {CashService} from "./services/cash.service.js";
import {ProductController} from "./controllers/product.controller.js";
import {CouponController} from "./controllers/coupon.controller.js";

const app = express();

const productService = new ProductService();
const cashService = new CashService(); // 1. new 한번으로 모든 곳에서 재사용 가능(싱글톤패턴)

const productController = new ProductController(cashService, productService);
app.post("/products/buy", productController.buyProduct);
app.post("/products/refund", productController.refundProduct);

const couponController = new CouponController(cashService);
app.post("/coupons/buy", couponController.buyCoupon);

app.listen(3000, () => {
    console.log("Server started");
});