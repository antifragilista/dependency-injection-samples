import { CashService } from '../services/cash.service.js'

export class CouponController {
    buyCoupon = (req, res) => {
        const cashService = new CashService();
        const hasMoney = cashService.checkValue();

        if(hasMoney){
            res.send("buyCoupon api success");
        }
    }
}