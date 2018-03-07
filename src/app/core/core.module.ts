import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthModule } from '../auth/auth.module';
import { AuthService } from './auth.service';
import {AngularFireModule} from "angularfire2";
import {AngularFireStorageModule} from "angularfire2/storage";
import {AngularFireAuthModule} from "angularfire2/auth";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    AuthModule,
    AngularFireModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  declarations: [],
  providers: [AuthService]
})
export class CoreModule { }
