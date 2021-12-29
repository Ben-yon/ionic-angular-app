import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { Recipe } from './../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute,
              private recipeService: RecipesService,
              private router: Router,
              private alertCtrl: AlertController) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')){
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    });
  }
  async onDeleteRecipe(){
    const alert = await this.alertCtrl.create({header: 'Are you sure?', message: 'Do you want to delete this recipe?',
    buttons: [{
      text: 'Cancel',
      role: 'cancel'
    },{
      text: 'Delete',
      handler: () => {
        this.recipeService.deleteRecipe(this.loadedRecipe.id);
        this.router.navigate(['/recipes']);
      }
    }]});
    await alert.present();

  }
  convertToJSON(ingredients: any): any {
    if (ingredients instanceof Array){
      return ingredients;
    }
    else{
      return ingredients.split(',');
    }

  }
}
