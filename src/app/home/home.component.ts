import { Component, OnInit } from '@angular/core';
import { Fitness, User } from '../models/Fitness';
import { Http } from "@angular/http";
import { Router } from '@angular/router';
import { FitnessService } from '../services/fitness.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Model = new Fitness();
  Me: User;

  private _api = "http://localhost:8080/"

  constructor(
    private http: Http,
    private _Fitness: FitnessService,
    private _Router: Router
  ) {
    this.Me = _Fitness.Me;
    if(!this.Me) {
      _Router.navigate(['/login']);
    }
   }

  ngOnInit() {
  }

  submitActivity(e: MouseEvent, text: string) {
    e.preventDefault();

    this.Model.Activities.push(text);

  }

  removeActivity(text: string) {
    this.Model.Activities.splice(this.Model.Activities.indexOf(text), 1);
  }

  searchActivity(text: string, subtext: string) {
    if(subtext === "") {
      return true;
    }
    else {
      return text.indexOf(subtext) > -1;
    }
  }

}


