import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  products: Array<Product> = [
    {
    name: "Pont Bar",
    type: "Barra Protéica",
    price: 2000,
    stock: 47,
    image: "assets/img/pontBar.JPEG",
    clearance: true,
    quantity: 0,
  },

  {
    name: "Protein Pancakes Granger",
    type: "Pancakes Protéicos de Avena - 350gr",
    price: 3890,
    stock: 0,
    image: "assets/img/proteinPancakes.JPEG",
    clearance: false,
    quantity: 0,

  },

  {
    name: "Whey Protein - Star Nutrition",
    type: "Proteína en Polvo de Vainilla - 3kg",
    price: 67000,
    stock: 23,
    image: "assets/img/wheyProtein.JPEG",
    clearance: false,
    quantity: 0,

  }
  ]

  ngOnInit(): void {
    console.log("Componente ProductList cargado");
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

}
