import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService ) { }

  ngOnInit(): void {
  }

  onIngredientAdded(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    const name: string = nameInput.value;
    const amount: number = Number(amountInput.value);
    const ingredient: Ingredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(ingredient);
  }

}
