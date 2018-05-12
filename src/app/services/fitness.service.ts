import { Injectable } from '@angular/core';
import { User } from '../models/Fitness';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Injectable()
export class FitnessService {

  Me: User;
  token: string;
  private _api = "http://localhost:8080/home";

  constructor(private _http: Http, private _Router: Router) { }

  oAuthLogin(id: string, name: string, token: string) {
    this.Me = { UserId: id, Name: name, MyActivities: [], MyFinishedActivities: [] };
    this.token = token;
    this._Router.navigate(['/home']);
  }

  login(email: string, password: string) {
    this._http.post(this._api + "/login", { email: email, password: password })
      .subscribe(data => {
        if(data.json().username) {
          this.Me = { UserId: email, Name: data.json().username, MyActivities: [], MyFinishedActivities: [] };
          this._Router.navigate(['/home']);
        }
    });
    
  }

  register(name: string, email: string, password: string) {
    console.log(name, email, password);
    this._http.post(this._api + "/register", { name: name, email: email, password: password })
      .subscribe(data => {
        if(data.json().success) {
          this.Me = null;
          this._Router.navigate(['/home']);
        }
    });
    
  }

}
