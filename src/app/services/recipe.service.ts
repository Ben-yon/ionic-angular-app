/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl = 'https://tasty.p.rapidapi.com/recipes';

  constructor(private http: HttpClientModule) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
        'X-RapidAPI-Key': '4bffea99dfmshf7b157421c43d7fp192606jsn2a2e566dfb13'
      })

  };


}
