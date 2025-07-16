import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './Product';
import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from '../input-integer/input-integer.component';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, InputIntegerComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  products: Array<Product> = [
    {
    name: "Pont Bar",
    type: "Barra protéica",
    price: 2000,
    stock: 47,
    image: "assets/img/pontBar.JPEG",
    clearance: true,
    quantity: 0,
  },

  {
    name: "Protein Pancakes Granger",
    type: "Pancakes Protéicos de avena - 350gr",
    price: 3890,
    stock: 0,
    image: "assets/img/proteinPancakes.JPEG",
    clearance: false,
    quantity: 0,

  },

  {
    name: "Whey Protein - Star Nutrition",
    type: "Proteína en Polvo de vainilla - 3kg",
    price: 67000,
    stock: 23,
    image: "assets/img/wheyProtein.JPEG",
    clearance: false,
    quantity: 0,

  },

  {
    name: "Mantequilla de Maní - entrenuts",
    type: "Mantequilla de maní Natural - 370gr",
    price: 2100,
    stock: 50,
    image: "assets/img/peanutButter.JPEG",
    clearance: true,
    quantity: 0,
  },

  {
    name: "Hamburguesas Veganas - nutree",
    type: "Hamburguesas de quinoa y espinaca - x4",
    price: 4700,
    stock: 77,
    image: "assets/img/veganBurger.JPEG",
    clearance: false,
    quantity: 0,
  },

   {
    name: "Cookies de Chocolate - Íntegra",
    type: "Cookies de cacao y chocolate - 200gr",
    price: 2900,
    stock: 100,
    image: "assets/img/cookiesChocolate.JPEG",
    clearance: false,
    quantity: 0,
  },

   {
    name: "Granola - Mudra",
    type: "Granola  SIN TACC con frutos secos, semillas y cacao - 160gr",
    price: 5150,
    stock: 0,
    image: "assets/img/granolaMudra.JPEG",
    clearance: true,
    quantity: 0,
  }

  ]

  constructor(private shopcart : ProductCartService) {
  }

  addToCart (product: Product): void {
    this.shopcart.addToCart(product);
  }

  maxReached(m:string){
    alert(m);
  }

   ngOnInit(): void {
  }


}
