import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product';
import productJson from '../../assets/products-list.json';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductDetailsComponent implements OnInit {
  products: Array<Product> = productJson;
  productItem?: Product;
  priceDiscount!: number;
  rate!: number;
  stars: number[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
  const paramId = this.activatedRoute.snapshot.params['id'];
  const productId: number = parseInt(paramId, 10); // Example conversion to number

  this.productItem = this.products.find((p: Product) => p.id === productId);
  // console.log(this.productItem);
  // console.log(paramId);
  if (this.productItem) {
    this.priceDiscount =Math.round(this.productItem.price! * (1 - this.productItem.discountPercentage! / 100)) ;
  }

  if (this.productItem) {
    this.rate = Math.round(this.productItem.rating!);
    this.stars = Array(this.rate).fill(0).map((_, index) => index + 1);
  }
}

}
