import { Component } from '@angular/core';
import { ServiceTest} from './form.service';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router, CanActivate } from '@angular/router';

import { CommunicatorService } from './communicatorService';

@Component ({
   selector: 'app-home',
   templateUrl: './form.component.html',
   styleUrls: ['./form.component.css'],
   providers: [ ServiceTest ],
})

export class FormComponent {
  token: any;
  res: any;
  Email = '';
  form = new FormGroup({
  mailOption: new FormControl('1'),
  });

  constructor(private _service: ServiceTest, private router: Router, public _communicatorService: CommunicatorService) {
    if (this._communicatorService.gettoken() == undefined || this._communicatorService.getValidUser() === 0) {
        this.router.navigate(['/']);
    } else {
        console.log('Logged in');
    }
  }

  submit(email: string, batch: string, expiry: string, mailOption: any) {
    this.Email = '';
    this.token = this._communicatorService.gettoken();
    return this._service.submit(email, batch, expiry, mailOption, this.token);
  }
}
