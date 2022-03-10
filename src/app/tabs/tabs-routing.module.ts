import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'add-recipe',
        loadChildren: () => import('./../recipes/add-recipe/add-recipe-routing.module').then(m=>m.AddRecipePageRoutingModule)
      },
      {
        path: 'recipes',
        loadChildren: () => import('./../recipes/recipes.module').then(m=>m.RecipesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
