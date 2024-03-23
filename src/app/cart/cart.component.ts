import { AddToCartService } from './../services/add-to-cart.service';
import { Component } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  items: any[] = [];

  constructor(private AddToCartService: AddToCartService) {
    this.items = this.AddToCartService.getItems();
  }

  increaseQuantity(index: number) {
    this.AddToCartService.increaseQuantity(index);
  }

  decreaseQuantity(index: number) {
    this.AddToCartService.decreaseQuantity(index);
  }

  removeItem(index: number) {
    this.AddToCartService.removeItem(index);
  }
}
