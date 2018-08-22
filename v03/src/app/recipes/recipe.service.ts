import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Veggiie Burger',
          'A taste full of yumm!',
          'https://cookieandkate.com/images/2018/08/sweet-potato-black-bean-veggie-burgers-4.jpg',
          [ new Ingredient('Tomato slice', 2),
            new Ingredient('Onion slice', 2),
            new Ingredient('Veggie patte', 1),
            new Ingredient('Buns', 2),
          ]),
    new Recipe('Cheese Pizza',
          'Just cheese!',
          'http://halalpizzaandfriedchicken.com/wp-content/uploads/2017/07/Traditional-Cheese-Pizza.jpg',
          [ new Ingredient('Tomato', 2),
            new Ingredient('Onion', 2),
            new Ingredient('Pizza base', 1),
            new Ingredient('Three Cheese', 5),
        ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
