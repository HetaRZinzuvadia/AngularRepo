import { Ingredients } from './../shared/ingredients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  ingredient: Ingredients[] = [
    new Ingredients("Tomatoes", 5),
    new Ingredients("Cucumber",3),
    new Ingredients("Carrot",2)
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
