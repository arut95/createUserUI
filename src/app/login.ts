import { Component } from '@angular/core';
import {Injectable} from '@angular/core';
import {Response, Headers, Http, HttpModule, RequestOptions} from '@angular/http';
import { HttpParams} from '@angular/common/http';

import { Router, CanActivate } from '@angular/router';

import { CommunicatorService } from './communicatorService';

@Component ({
   selector: 'app-login',
   templateUrl: './login.html',
   // styleUrls: ['./form.component.css'],
})

export class LoginComponent {

  output: any;
  constructor(private http_: Http, private router: Router, public _communicatorService: CommunicatorService ) { }


submit(adminUsername: string, adminPassword: string) {
    const token = adminUsername + ':' + adminPassword;
    this._communicatorService.settoken(token);
    const url = 'http://localhost:8080/login';
    const accessToken = window.btoa(token);
    const headers = new Headers({ 'Content-Type': 'application/json' ,
                                    'Authorization': 'Basic ' + accessToken
                                });
    const options = new RequestOptions({ headers: headers });

    this.http_.get(url, options)
        .subscribe(output => {
            this.output = output.text();
            if (this.output === 'Success') {
                this.router.navigate(['/createUser']);
            }
        return this.output;
    },
          error => {
            alert('Invalid Username or Password');
         }
         );

  }
}
