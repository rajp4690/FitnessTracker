import { Injectable } from '@angular/core';
import { User } from '../models/Fitness';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Injectable()
export class FitnessService {

  Me: User;
  token: string;

  constructor(private _http: Http, private _Router: Router) { }

  oAuthLogin(name: string, token: string) {
    this.Me = { Name: name, MyActivities: [], MyFinishedActivities: []};
    this.token = token;
    this._Router.navigate(['/home']);
  }

}