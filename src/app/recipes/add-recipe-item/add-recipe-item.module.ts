import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRecipeItemPageRoutingModule } from './add-recipe-item-routing.module';

import { AddRecipeItemPage } from './add-recipe-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRecipeItemPageRoutingModule
  ],
  declarations: [AddRecipeItemPage]
})
export class AddRecipeItemPageModule {}
