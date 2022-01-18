import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'Tabs',
    component: TabsPage,
    children: [
      {
        path: 'add-recipe',
        loadChildren: () => import('./../recipes/add-recipe/add-recipe.page').then(m=>m.AddRecipePage)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
