import { Component, OnInit } from '@angular/core';
import { Fitness, User } from '../models/Fitness'

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  Model = new Fitness();
  Me = new User();
  
  constructor() { 
    this.Me.Name = 'Raj';
   }

  ngOnInit() {
  }

}
