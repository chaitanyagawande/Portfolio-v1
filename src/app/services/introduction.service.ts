import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Profile } from '../common/profile';

@Injectable({
  providedIn: 'root'
})
export class IntroductionService {

  private JSON_URL = "assets/introduction.json";

  constructor(private http:HttpClient) {}

  getProfile(){
    return this.http.get(this.JSON_URL);
  }
}
