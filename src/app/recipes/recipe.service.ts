import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Shakshuka',
      'Great breakfast from Middle East.',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
      [
        new Ingredient('Egg', 3),
        new Ingredient('Tomato', 2),
        new Ingredient('Onion', 1)
      ]
    ),
    new Recipe(
      'Jambalaya',
      'Amazing dish from Louisiana.',
      'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32-1100x1650.jpg',
      [
        new Ingredient('Bell Pepper', 1),
        new Ingredient('Onion', 1),
        new Ingredient('Rice', 0.1),
        new Ingredient('Chicken', 0.2)
      ]
    ),
    new Recipe(
      'Roast Chicken',
      'The best option for a feast.',
      'https://diethood.com/wp-content/uploads/2019/07/Whole-Roast-Chicken.jpg',
    [
      new Ingredient('Chicken', 1)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
