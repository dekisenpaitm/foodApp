import {CartItem} from "./CartItem";

export class Cart{
  cartItems:CartItem[] = [];

  get totalPrice():number{
    let totalPrice = 0;
    this.cartItems.forEach(item => {
      totalPrice += item.price;
    })
    return totalPrice;
  }
}
