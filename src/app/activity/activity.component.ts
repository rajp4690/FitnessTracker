import { Component, OnInit } from '@angular/core';
import { Fitness } from '../models/Fitness'

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  Model = new Fitness();

  constructor() { }

  ngOnInit() {
  }

}
