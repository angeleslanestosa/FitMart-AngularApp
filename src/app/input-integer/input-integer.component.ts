import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../product-list/Product';


@Component({
  selector: 'app-input-integer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit{

  @Input() product!:Product;

  ngOnInit(): void{

  }

  upQuantity(product:Product): void{
    if(product.quantity < product.stock){
      product.quantity++;
    }
  }

  downQuantity(product:Product): void{
    if(product.quantity>0){
      product.quantity--;
    }

  }

  validateQuantity(product : Product):void{
    if(product.quantity<0){
      product.quantity = 0;
    }
    if(product.quantity>product.stock){
      product.quantity = product.stock;
    }
  }

}
