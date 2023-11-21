import {ProductService} from "../services/product.service.js";
import {CashService} from "../services/cash.service.js";

export class ProductController {
    buyProduct(req, res) {
        const cashService = new CashService();
        const hasMoney = cashService.checkValue();

        const productService = new ProductService();
        const isSoldout = productService.checkSoldout();

        if(hasMoney && !isSoldout) {
            res.send('buyProduct api success');
        }
    }

    refundProduct(req, res) {
        const productService = new ProductService();
        const isSoldout = productService.checkSoldout();

        if (isSoldout) {
            res.send('refundProduct api success');
        }
    };
}