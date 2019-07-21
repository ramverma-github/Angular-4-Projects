import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularServiceComponent } from './angular-service/angular-service.component';
import { HttpServiceComponent } from './http-service/http-service.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AngularServiceComponent,
    HttpServiceComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [HttpServiceComponent]
})
export class AppModule { }
