export class ProductController {
    constructor(cashService, productService) {
        this.cashService = cashService;
        this.productService = productService;
    }

    buyProduct = (req, res) => {
        const hasMoney = this.cashService.checkValue();

        const isSoldout = this.productService.checkSoldout();

        if (hasMoney && !isSoldout) {

        }

        res.send('buyProduct api success');
    };

    refundProduct = (req, res) => {
        const isSoldout = this.productService.checkSoldout();

        if (isSoldout) {

        }

        res.send('refundProduct api success');
    };
}