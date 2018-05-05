import { Component, OnInit } from '@angular/core';
import { Fitness } from '../models/Fitness';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Model = new Fitness();

  constructor() { }

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
