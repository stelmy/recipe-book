import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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
        new Ingredient('Rice', 1),
        new Ingredient('Chicken', 1)
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
}
