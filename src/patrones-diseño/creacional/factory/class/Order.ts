import IPaymentMethod from '../interface/interface';
import { PaymentType } from '../enums/Payment';
import PaymentMehodFactory from './PaymentMethodFactory';


export default class Order {
    public paymentType?: IPaymentMethod;
    public commission: number = 0;
    constructor(
        private type: PaymentType,
        public amount: number
    ) { }

    public create(): void {
        this.paymentType = PaymentMehodFactory.createPaymentType(this.type);
        this.commission = this.paymentType.comission * this.amount;

    }
    get getComission() {
        return this.commission
    }
}
