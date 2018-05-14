import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import { MessagesComponent } from './messages/messages.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { FitnessService } from './services/fitness.service';
import { MessageService } from './services/message.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivityComponent,
    MessagesComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent },
      {path: 'activity', component: ActivityComponent },
      {path: 'login', component: LoginComponent },
      {path: '', redirectTo: '/home', pathMatch: 'full'}
    ])
  ],
  providers: [FitnessService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
