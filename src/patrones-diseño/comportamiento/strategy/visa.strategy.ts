import { PaymentCardStrategy, PaymentResponse } from './interfaces/index';

export class VisaStrategy implements PaymentCardStrategy {
    constructor(public cardNumber: string, public cvv: string) { }

    execute(userId: string, amount: number): PaymentResponse {
        console.log(`Vista Aprobo la transaccion por ${userId} por un monto de US$ ${amount}.`);
        return { isSuccess: true };
    }
}