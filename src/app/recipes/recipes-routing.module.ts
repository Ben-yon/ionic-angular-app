import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesPage } from './recipes.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage,
    pathMatch: 'full'
  },
  // {
  //   path: ':recipeId',
  //   loadChildren: () => import('./recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule),
  // },
  {
    path: 'addRecipe',
    loadChildren: () => import('./add-recipe/add-recipe.module').then( m => m.AddRecipePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesPageRoutingModule {}
