import { Actions, Effect, ofType } from '@ngrx/effects';
import * as RecipesActions from '../store/recipe.actions';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe.model';
import { map } from 'rxjs/operators';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';

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

    @Effect({dispatch: false})
    storeRecipes = this.actions$.pipe(
        ofType(RecipesActions.STORE_RECIPES),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([actionData, recipesState]) => {
            return this.http.put(
                'https://mstelmach-recipe-book.firebaseio.com/recipes.json',
                recipesState.recipes
              )
        })
    );

    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private store: Store<fromApp.AppState>) {

    }
}