import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  { path: '', component: SigninComponent, data: {title: 'Sign in'} },
  { path: 'signin', component: SigninComponent, data: {title: 'Sign in'} },
  { path: 'signup', component: SignupComponent, data: {title: 'Sign up'} },
  { path: 'reset', component: ResetPasswordComponent, data: {title: 'Reset password'} }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignupComponent, SigninComponent, ResetPasswordComponent]
})
export class AuthModule { }
