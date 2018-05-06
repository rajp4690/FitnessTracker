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

  private _api = "http://localhost:8080/home"

  constructor(
    private http: Http,
    private _Fitness: FitnessService,
    private _Router: Router
  ) {
    this.Me = _Fitness.Me;
    if(!this.Me) {
      _Router.navigate(['/login']);
    }
    this.http.get(this._api + "/activities", { params: { userId: this.Me.UserId, name: this.Me.Name } })
      .subscribe(data => {
          this.Me = data.json();
        }
      );

      setInterval(() => this.refresh(), 1000);
   }

  ngOnInit() {
  }

  refresh() {
    this.http.get(this._api + "/state").subscribe(data => this.Model = data.json());
  }

  submitActivity(e: MouseEvent, text: string) {
    e.preventDefault();
    this.http.post(this._api + "/activities", { UserId: this.Me.UserId, Activity: text, Action: "submit"})
      .subscribe(data => {
        if(data.json().success) {
          this.Me.MyActivities.push(text);
        }
    });

  }

  removeActivity(text: string) {
    this.http.post(this._api + "/activities", { UserId: this.Me.UserId, Activity: text, Action: "remove"})
      .subscribe(data => {
        if(data.json().success) {
          this.Me.MyActivities.splice(this.Me.MyActivities.indexOf(text), 1);
        }
    });
    
  }

  searchActivity(text: string, subtext: string) {
    if(subtext === "") {
      return true;
    }
    else {
      return text.indexOf(subtext) > -1;
    }
  }

  finishActivity(text: string) {
    this.http.post(this._api + "/activities", { UserId: this.Me.UserId, Activity: text, Action: "finish"})
      .subscribe(data => {
        if(data.json().success) {
          this.Me.MyActivities.splice(this.Me.MyActivities.indexOf(text), 1);
          this.Me.MyFinishedActivities.push(text);
        }
    });
  }

  nextNews() {
    this.http.get(this._api + '/news').subscribe();
  }

}


