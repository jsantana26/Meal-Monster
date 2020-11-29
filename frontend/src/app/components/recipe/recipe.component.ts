import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  recipe$: Observable<any>

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    this.route.paramMap
      .subscribe(params => {
        //TODO: Get recipes service to connect to api
        //this.recipe$ = this.recipeService.getRecipe(params.get('id'));
      })
  }
}
