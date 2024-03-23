import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  constructor() { }

  items: any[] = [];

  addToCart(product: any) {
    this.items.push({ ...product, quantity: 1 });
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  increaseQuantity(index: number) {
    this.items[index].quantity++;
  }

  decreaseQuantity(index: number) {
    if (this.items[index].quantity > 1) {
      this.items[index].quantity--;
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
