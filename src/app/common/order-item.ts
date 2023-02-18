import { CartItem } from "./cart-item";

export class OrderItem {
    quantity: number;
    price: number;
    productId: number;
    name: string;

    constructor(cartItem: CartItem) {
        this.quantity = cartItem.quantity;
        this.price = cartItem.price;
        this.productId = cartItem.id;
        this.name = cartItem.name;
    }
}
