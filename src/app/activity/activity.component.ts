import { Component, OnInit, OnDestroy } from '@angular/core';
import { Fitness, User } from '../models/Fitness'
import { Http } from '@angular/http';
import { FitnessService } from '../services/fitness.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit, OnDestroy {

  Model = new Fitness();
  Me: User;
  chosenUser: User;

  private _api = "http://localhost:8080/home";
  public interval: any;

  constructor(
    private http: Http,
    private _Fitness: FitnessService,
    private _Router: Router
  ) {
    this.Me = _Fitness.Me;
    if(!this.Me) {
      _Router.navigate(['/login']);
    }
    else {
      this.http.get(this._api + "/activities", { params: { userId: this.Me.UserId, name: this.Me.Name } })
      .subscribe(data => {
          this.Me = data.json();
        }
      );
    }
    this.refresh();
    this.interval = setInterval(() => this.refresh(), 1000);
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  checkUser(userId: string) {
    this.chosenUser = this.Model.Users.find(x => x.UserId === userId);
  }

  refresh() {
    this.http.get(this._api + "/state").subscribe(data => this.Model = data.json());
  }

  progress() {
    return ((this.Me.MyFinishedActivities.length * 100) / (this.Me.MyActivities.length + this.Me.MyFinishedActivities.length)).toFixed(2);
  }

}
