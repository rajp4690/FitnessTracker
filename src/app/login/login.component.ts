import { Component, OnInit } from '@angular/core';
import { FitnessService } from '../services/fitness.service';

declare var googleyolo: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  show = false;

  constructor(private _Fitness: FitnessService) {
    
   }

  ngOnInit() {
  }

  googleLogin(){
    googleyolo.hint({
      supportedAuthMethods: [
        "https://accounts.google.com"
      ],
      supportedIdTokenProviders: [
        {
          uri: "https://accounts.google.com",
          clientId: "597094911057-8bq5rtf592jemptbthmn39h900qb87rn.apps.googleusercontent.com"
        }
      ]
    }).then((credentials: any) => {
      this._Fitness.oAuthLogin(credentials.id, credentials.displayName, credentials.idToken);
      console.log(credentials);
    });
  }

  login(email:string, password: string) {
    this._Fitness.login(email, password);
  }

  register(name: string, email: string, password: string) {
    this._Fitness.register(name, email, password);
  }

}
