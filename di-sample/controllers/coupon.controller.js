export class CouponController {
    constructor(cashService) {
        this.cashService = cashService;
    }

    buyCoupon = (req, res) => {
        const hasMoney = this.cashService.checkValue();

        if (hasMoney) {

        }

        res.send("buyCoupon api success");
    };
}