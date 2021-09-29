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

  constructor() {}

  ngOnInit() {
  }

  addItem(){

  }

}
