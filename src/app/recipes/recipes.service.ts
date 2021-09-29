/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Schnitzel_%288427472224%29.jpg',
      ingredients: ['French Fries', 'Pork', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Spaghetti-prepared.jpg',
      ingredients: ['Tomatoes', 'Pasta', 'spices  ']
    }
  ];
  constructor(public alertController: AlertController) { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
  }

  async addRecipe(title: string, ingredients: [], imageUrl: string){
    const index = this.recipes.find(idx=> idx.id);

    if (index.title){
      const alert = await this.alertController.create({
        header: 'Recipe Exist!',
        message: 'Please this recipe already exist, try another time',
        buttons: ['OK']
      });

      alert.present();
    }
    return this.recipes.push({id: 'r3', title, imageUrl, ingredients});
  }
}
