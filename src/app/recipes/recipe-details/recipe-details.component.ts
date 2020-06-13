import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  recipeId: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map(params => {
          return +params.id;
        }),
        switchMap(id => {
          this.recipeId = id;
          return this.store.select('recipes');
        }),
        map(recipesState => {
          return recipesState.recipes.find((recipe, index) => {
            return index === this.recipeId;
          })
        })
      ).subscribe(recipe => {
        this.recipe = recipe;
      });
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onDeleteRecipe() {
    this.recipeService.removeRecipe(this.recipeId);
    this.router.navigate(['/recipes']);
  }

}
