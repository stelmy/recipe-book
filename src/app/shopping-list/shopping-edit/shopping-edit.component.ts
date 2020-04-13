import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    const name: string = nameInput.value;
    const amount: number = Number(amountInput.value);
    const ingredient: Ingredient = new Ingredient(name, amount);
    this.ingredientAdded.emit(ingredient);
  }

}
