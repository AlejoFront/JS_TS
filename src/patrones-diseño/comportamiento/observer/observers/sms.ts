import { Observer } from '../implements/interface';
import { Order } from '../cartItem';

export class SmsObserver implements Observer {
    update(message: Order): void {
        const total = message.items.map(x => x.quantity * x.unitPrice).reduce((a, b) => a + b);
        console.log(`SMS: ${message.userFirstName}, Su Pedido ${message.id} por el valor de $${total} ha sido aprobado.`);
    }
}