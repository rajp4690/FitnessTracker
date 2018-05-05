import { Component, OnInit } from '@angular/core';
import { FitnessService } from '../services/fitness.service';

declare var googleyolo: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
          clientId: "425516493203-pkhu17llakolpgni1qbrvfkuutugeukn.apps.googleusercontent.com"
        }
      ]
    }).then((credentials: any) => {
      this._Fitness.oAuthLogin(credentials.displayName, credentials.idToken);
      console.log(credentials);
    });
  }

}
