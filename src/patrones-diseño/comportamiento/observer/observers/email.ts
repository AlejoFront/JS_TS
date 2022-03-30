import { Order } from '../cartItem';
import { Observer } from '../implements/interface';

export class EmailObserver implements Observer {
    update(message: Order): void {
        console.log(`EMAIL: Su pedido #${message.id} hha sido aprobado.`);
    }
}