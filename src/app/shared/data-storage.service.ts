import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../recipes/recipe.model';
import {RecipeService} from '../recipes/recipe.service';
import {map, tap} from 'rxjs/operators';
import {Ingredient} from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService) {

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
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          const ingredientsToSet: Ingredient[] = recipe.ingredients ? recipe.ingredients : [];
          return {...recipe, ingredients: ingredientsToSet};
        });
      }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        }));
  }

}
