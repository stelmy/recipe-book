import { Actions, Effect, ofType } from '@ngrx/effects';
import * as RecipesActions from '../store/recipe.actions';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe.model';
import { map } from 'rxjs/operators';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeEffects {
    @Effect()
    fetchRecipes = this.actions$
        .pipe(
            ofType(RecipesActions.FETCH_RECIPES),
            switchMap(fetchAction => {
                return this.http.get<Recipe[]>('https://mstelmach-recipe-book.firebaseio.com/recipes.json')
            }),
            map(recipes => {
                return recipes.map(recipe => {
                  const ingredientsToSet: Ingredient[] = recipe.ingredients ? recipe.ingredients : [];
                  return {
                      ...recipe, ingredients: ingredientsToSet};
                    }
                );
              }),
            map(recipes => {
                return new RecipesActions.SetRecipes(recipes);
            })
        );

    constructor(
        private actions$: Actions,
        private http: HttpClient) {

    }
}