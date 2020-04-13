import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Shakshuka',
      'Shakshuka is a classic North African and Middle Eastern dish and one that’s eaten for breakfast or any meal of the day. It’s made from simple, healthy ingredients and is vegetarian. Shakshuka literally means “a mixture” and the traditional version uses tomatoes, onions and spices as the base with eggs poached on top.',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'
    ),
    new Recipe(
      'Jambalaya',
      'Hands-down the best jambalaya recipe! It is surprisingly easy to make, customizable with your favorite proteins (I used chicken, shrimp and Andouille sausage), and full of bold, zesty, Cajun jambalaya flavors that everyone will love.',
      'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32-1100x1650.jpg'
    ),
    new Recipe(
      'Roast Chicken',
      'Simple Roast Chicken flavored with garlic, butter and herbs, then oven roasted to a golden, crispy, and juicy perfection! EASY, simple to make and flavorful, this is the BEST roast chicken, and it’s perfect for weekend or weeknight dinners.',
      'https://diethood.com/wp-content/uploads/2019/07/Whole-Roast-Chicken.jpg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
