import { Component } from '@angular/core';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-fitmart-shopcart',
  imports: [],
  templateUrl: './fitmart-shopcart.component.html',
  styleUrl: './fitmart-shopcart.component.scss'
})
export class FitmartShopcartComponent {

  constructor (private shopcart:ProductCartService){
  }

}
