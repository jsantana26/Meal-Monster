import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  @Input('name') name: string;
  @Input('prepTime') prepTime: number;
  @Input('cookTime') cookTime: number;
  @Input('imgSrc') imgSrc: string;
  @Input('key') key: string;
  constructor() { }

  ngOnInit() {
  }

}
