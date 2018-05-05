import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import { MessagesComponent } from './messages/messages.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { FitnessService } from './services/fitness.service';


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
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent },
      {path: 'activity', component: ActivityComponent },
      {path: 'login', component: LoginComponent },
      {path: '', redirectTo: '/home', pathMatch: 'full'}
    ])
  ],
  providers: [FitnessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
