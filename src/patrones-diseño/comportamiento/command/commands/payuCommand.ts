import { ICommand } from '../interface/index';
import { CreditCardDto } from './dto/CreditCardDto';

export class PayUCommand implements ICommand {
    public readonly providerName: string = 'PayU';

    constructor(private readonly creditCardDef: CreditCardDto) { }

    handle(): void {
        console.log(`${this.providerName} Realizo el pago correctamente ..`);
        // your code goes here ..
    }
}