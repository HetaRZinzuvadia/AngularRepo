import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Salad', 'This is the vegan salad with fresh vegetables init.', 'https://upload.wikimedia.org/wikipedia/commons/0/04/Salad.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
