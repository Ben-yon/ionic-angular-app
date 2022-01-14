import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;

  loadedRecipe: Recipe;
  constructor(private recipeService: RecipesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  deleteRecipeItem(){
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')){
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    });
    return this.recipeService.deleteRecipe(this.loadedRecipe.id);
  }

}
