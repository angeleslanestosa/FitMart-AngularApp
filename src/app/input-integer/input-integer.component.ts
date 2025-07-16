import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-input-integer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit{

  constructor(){}

  @Input() quantity: number = 0;

  @Input() max : number = 0;

  @Output() quantityChange = new EventEmitter<number>();

  @Output() maxReached = new EventEmitter<string>();

  ngOnInit(): void{

  }

  upQuantity(): void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else{
      this.maxReached.emit("Se alcanzó el máximo de productos en stock");
    }
  }

  downQuantity(): void{
    if(this.quantity>0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }

  }

  validateQuantity():void{
    if(this.quantity<0){
      this.quantity = 0;
    }
    if(this.quantity>this.max){
      this.quantity = this.max;
    }
    this.quantityChange.emit(this.quantity);
  }

}
