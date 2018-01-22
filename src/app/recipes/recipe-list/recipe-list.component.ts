import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [
    new Recipe(
      'Test Name Recipe', 'decription of Recipe', 'http://images.media-allrecipes.com/userphotos/250x250/972475.jpg'
    ),
    new Recipe(
      'Test Name Recipe2', 'decription of Recipe2', 'http://images.media-allrecipes.com/userphotos/250x250/972476.jpg'
    )
  ];
  constructor() { }

  ngOnInit() {
  }

}
