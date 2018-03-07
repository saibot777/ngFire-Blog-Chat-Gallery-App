import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing.module';
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    SharedModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
