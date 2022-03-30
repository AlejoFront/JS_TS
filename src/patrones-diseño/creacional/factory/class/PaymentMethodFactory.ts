import { PaymentType } from '../enums/Payment';
import IPaymentMethod from '../interface/interface';
import MasterCard from '../types/Mastercard';
import PayPal from '../types/Paypal';
import Visa from '../types/Visa';

export default class PaymentMehodFactory {
    public static createPaymentType(type: PaymentType): IPaymentMethod {
        if (type === PaymentType.MasterCard) {
            return new MasterCard();
        }
        if (type === PaymentType.Paypal) {
            return new PayPal();
        }

        if (type === PaymentType.Visa) {
            return new Visa();
        }
        throw new Error('Invalid payment method type.');
    }
}