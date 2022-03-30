import { PaymentGatewayStrategy, PaymentResponse } from './interfaces/index';

export class PayPalStrategy implements PaymentGatewayStrategy {
    constructor(public userEmail: string) { }

    execute(userId: string, amount: number): PaymentResponse {
        console.log(`PayPal Aprobo la transaccion por ${userId} por un monto de US$ ${amount}.`);
        return { isSuccess: true };
    }
}