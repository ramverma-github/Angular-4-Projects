import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import {FormsModule}     from '@angular/forms';

import { AppComponent } from './app.component';
import { AbcComponent } from './abc/abc.component';
import { XyzComponent } from './xyz/xyz.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDBComponent } from './two-way-db/two-way-db.component';
import { CustomDirectivesDirective } from './custom-directives.directive';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { CustDirectiveComponent } from './cust-directive/cust-directive.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeTitlePipe } from './employee-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    XyzComponent,
    DataBindingComponent,
    EventBindingComponent,
    TwoWayDBComponent,
    CustomDirectivesDirective,
    DirectiveDemoComponent,
    CustDirectiveComponent,
    EmployeeListComponent,
    EmployeeTitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EmployeeListComponent]
})
export class AppModule { }
