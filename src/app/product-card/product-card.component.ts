import { CommonModule } from '@angular/common';
import { Component , Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';
import { AddToCartService } from '../services/add-to-cart.service';
import { CartCounterService } from '../services/cart-counter.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})


export class ProductCardComponent {
  @Input() productItem ! : Product ;
  productDiscription!: string ;
  rate!: number;
  stars: number[] = [];

  private sliceDescription(description: string, maxLength: number): string {
    return description.length > maxLength ? description.slice(0, maxLength) : description;
  }

  priceDiscount!: number;

  ngOnInit(): void {
    if (this.productItem && this.productItem.description) {
      this.productDiscription = this.sliceDescription(this.productItem.description, 50);
    }
    if (this.productItem) {
      this.priceDiscount =Math.round(this.productItem.price! * (1 - this.productItem.discountPercentage! / 100)) ;
    }
    if (this.productItem) {
      this.rate = Math.round(this.productItem.rating!);
      this.stars = Array(this.rate).fill(0).map((_, index) => index + 1);
    }
  }

  counter = 0;
  items: any[] = [];
  constructor(private router: Router, private cartService: AddToCartService,private counterService: CartCounterService) {
    this.items = this.cartService.getItems();
  }
  redirectToDetails(id? : number){
    this.router.navigate([`product-details/${id}`])
    
  }


addToCart(product: any) {
    this.cartService.addToCart(product);
    this.counterService.setCounter(this.counter +1);
    window.alert('Product added to cart');
  }
  increaseQuantity(index: number) {
    this.cartService.increaseQuantity(index);
  }

  decreaseQuantity(index: number) {
    this.cartService.decreaseQuantity(index);
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
  }

  
}
