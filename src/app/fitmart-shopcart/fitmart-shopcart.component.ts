import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/Product';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-fitmart-shopcart',
  imports: [CommonModule],
  templateUrl: './fitmart-shopcart.component.html',
  styleUrl: './fitmart-shopcart.component.scss'
})
export class FitmartShopcartComponent implements OnInit{

  cartList$: Observable<Product[]>;

  constructor (private shopcart:ProductCartService){
    this.cartList$ = shopcart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
