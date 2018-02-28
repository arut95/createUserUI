import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ServiceTest } from './form.service';
import { AppComponent } from './app.component';
import { FormComponent} from './form.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

import { routing } from './routing';
import { LoginComponent } from './login';

import { CommunicatorService } from './communicatorService';

@NgModule({
  imports:      [ BrowserModule, HttpModule , FormsModule, ReactiveFormsModule, routing],
  declarations: [ AppComponent , FormComponent, LoginComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ ServiceTest, CommunicatorService ],
})
export class AppModule { }
