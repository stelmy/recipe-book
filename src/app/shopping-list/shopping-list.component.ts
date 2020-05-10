import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromShoppingList from './store/shopping-list.reducer';
import {StartEdit} from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ingredients: Ingredient[]}>;
  private ingredientChangeSubscription: Subscription;

  constructor(private store: Store<fromShoppingList.AppState>) { }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
  }

  onEditItem(index: number) {
    this.store.dispatch(new StartEdit(index));
  }

  ngOnDestroy(): void {
    this.ingredientChangeSubscription.unsubscribe();
  }

}
