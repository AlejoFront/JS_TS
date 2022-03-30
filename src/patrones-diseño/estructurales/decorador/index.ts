import { Customer } from './customer';
import { Product } from './product';
import { BasePrice } from './basePrice';
import { SpecialPriceDecorator } from './decorators/SpecialPriceDecorator';
import { VipCustomerDecorator } from './decorators/VipCustomerDecorator';



export const instanciaDecorador = () => {
    const customer = new Customer('Juan', true, 'VIP');
    const product = new Product('Guitarra', 2500);
    let discount = new BasePrice();

    if (customer.isFirstBuy) {
        discount = new SpecialPriceDecorator(discount);
    }

    if (customer.type === 'VIP') {
        discount = new VipCustomerDecorator(discount);
    }

    product.setSpecialPrice(discount.calculate(product.price));

    console.log(product);
}