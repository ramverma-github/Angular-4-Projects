import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpRadioComponent } from './emp-radio/emp-radio.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpTitlePipe } from './emp-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpRadioComponent,
    EmpTitlePipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [EmpListComponent]
})
export class AppModule { }
