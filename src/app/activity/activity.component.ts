import { Component, OnInit } from '@angular/core';
import { Fitness, User } from '../models/Fitness'
import { Http } from '@angular/http';
import { FitnessService } from '../services/fitness.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

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
          console.log(data.json());
          this.Me = data.json();
        }
      );
   }

  ngOnInit() {
  }

}
