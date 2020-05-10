import {Recipe} from './recipe.model';
import {Subject} from 'rxjs';
import {Ingredient} from '../shared/ingredient.model';
import {Store} from '@ngrx/store';
import {AddIngredients} from '../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  constructor(private store: Store<fromShoppingList.AppState>) {
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.store.dispatch(new AddIngredients(ingredients));
  }
}
