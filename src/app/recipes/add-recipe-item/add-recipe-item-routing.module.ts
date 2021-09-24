import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRecipeItemPage } from './add-recipe-item.page';

const routes: Routes = [
  {
    path: '',
    component: AddRecipeItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRecipeItemPageRoutingModule {}
