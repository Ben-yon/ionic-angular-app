import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { Plugins, } from '@capacitor/core';
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

  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
  }

  addItem(){
    if (!this.title || !this.ingredients){
     this.recipeService.getAlertMsg('No Title Provided', 'Please provided a title and the description for the recipe', ['OK']);
    }
    }

}
