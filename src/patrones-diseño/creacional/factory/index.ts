import Order from './class/Order';
import { PaymentType } from './enums/Payment';

export const instanciaFactory = () => {
    console.log('Se necesita procesar las ordenes de compra');
    console.log('y calcular el costo que asumimos segun el metodo de pago');

    const order1 = new Order(PaymentType.Visa, 25000)
    const order2 = new Order(PaymentType.MasterCard, 10000)
    const order3 = new Order(PaymentType.Paypal, 6500)

    order1.create();
    order2.create();
    order3.create();
    console.log('')
    console.log(`orden1 fue con Visa y el costo asumido es ${order1.getComission}`)
    console.log(`orden2 fue con MasterCard y el costo asumido es ${order2.getComission}`)
    console.log(`orden3 fue con Paypal y el costo asumido es ${order3.getComission}`)
}