import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { FitmartShopcartComponent } from '../fitmart-shopcart/fitmart-shopcart.component';

@Component({
  selector: 'app-fitmart-products',
  standalone: true,
  imports: [
    ProductListComponent,
    FitmartShopcartComponent,
  ],
  templateUrl: './fitmart-products.component.html',
  styleUrl: './fitmart-products.component.scss'
})
export class FitmartProductsComponent {

}
