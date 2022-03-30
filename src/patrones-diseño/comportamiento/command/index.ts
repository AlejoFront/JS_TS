import { CreditCardDto } from './commands/dto/CreditCardDto';
import { PaymentMethodHandler } from './PaymentMethodHandler';
import { PayUCommand } from './commands/payuCommand';
import { NequiCommand } from './commands/nequiCommand';

export const instanciaCommand = () => {
    const creditCard = new CreditCardDto(
        "marstercard",
        "Eduardo qwerty asdf",
        "xxx-xxx-xxx-xxx",
        "xxx",
        300.00
    );

    const paymentMethodHandler = new PaymentMethodHandler();

    paymentMethodHandler.forceToProcess([
        new NequiCommand(creditCard),
        new PayUCommand(creditCard)
    ]);
}