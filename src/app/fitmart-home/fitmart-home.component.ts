import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fitmart-home',
  imports: [CommonModule],
  templateUrl: './fitmart-home.component.html',
  styleUrl: './fitmart-home.component.scss'
})
export class FitmartHomeComponent {

  categorias = [
    { label: 'Suplementos', icon: 'assets/img/suplemento.png' },
    { label: 'Snacks Saludables', icon: 'assets/img/snack.jpg' },
    { label: 'Superfoods', icon: 'assets/img/superfood.jpg' },
    { label: 'Bebidas', icon: 'assets/img/drink.png' },
  ];

}


