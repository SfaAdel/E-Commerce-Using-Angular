import { CommonModule } from '@angular/common';
import { Component , Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';

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

  constructor(private router:Router){

  }
  redirectToDetails(id? : number){
    this.router.navigate([`product-details/${id}`])
    
  }
}
