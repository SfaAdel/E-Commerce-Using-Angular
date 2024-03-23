import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartCounterService } from '../services/cart-counter.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  counter = 0;
  constructor(private counterService: CartCounterService) {}
  ngOnInit(){
    this.counterService.getCounter().subscribe((count)=>this.counter=count);
  }
}
