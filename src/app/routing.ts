import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { LoginComponent } from './login';
// import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'createUser', component: FormComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
