import { Injectable } from '@angular/core';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  cartList : Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    let item: Product | undefined = this.cartList.find((v1) => v1.name == product.name);  //el metodo find uede devolver undefined si no encuentra coincidencia

    if(!item){
      this.cartList.push(product);
    }
    console.log(this.cartList);
  }


}
