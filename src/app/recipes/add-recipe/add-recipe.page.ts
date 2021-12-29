import { Router } from '@angular/router';
import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { Plugins, } from '@capacitor/core';
import { Recipe } from '../recipe.model';
import { CameraResultType } from '@capacitor/camera';
import { Platform, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage implements OnInit {
  public ingredients: [];
  public title: string;
  public imageUrl: string;

  constructor(private recipeService: RecipesService, private router: Router) {}
  ngOnInit() {
  }

  async addItem(){
    if (!this.title || !this.ingredients){
     this.recipeService.getAlertMsg('No Title Provided', 'Please provided a title and the description for the recipe', ['OK']);
    }else{
      const newItem = this.recipeService.addRecipe(this.title, this.ingredients);
      console.log('New item 988');
      return this.router.navigate(['/recipes']);
    }
    // if (newItem){
    //   return this.router.navigate(['/']);
    //   }
}
}
