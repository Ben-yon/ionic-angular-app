import { Recipe } from './recipe.model';
import { AfterContentChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnChanges, AfterViewInit, AfterContentChecked{

  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }


  ngOnChanges(changes: SimpleChanges): void {
  }
  ngAfterViewInit(): void {

  }
  ngAfterContentChecked(): void {
    this.recipes = this.recipesService.getAllRecipes();
  }

}
