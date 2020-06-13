import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../recipes/recipe.model';
import {RecipeService} from '../recipes/recipe.service';
import {map, tap} from 'rxjs/operators';
import {Ingredient} from './ingredient.model';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as RecipesActions from '../recipes/store/recipe.actions';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private store: Store<fromApp.AppState>) {

  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(
      'https://mstelmach-recipe-book.firebaseio.com/recipes.json',
      recipes
    ).subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>('https://mstelmach-recipe-book.firebaseio.com/recipes.json')
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            const ingredientsToSet: Ingredient[] = recipe.ingredients ? recipe.ingredients : [];
            return {...recipe, ingredients: ingredientsToSet};
          });
        }),
        tap(recipes => {
          this.store.dispatch(new RecipesActions.SetRecipes(recipes));
        })
      );
  }

}
