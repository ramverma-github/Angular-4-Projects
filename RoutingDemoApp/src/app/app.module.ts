import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import{ Routes, RouterModule } from '@angular/router'

const appRoutes : Routes =[
  {path:'home', component:HomeComponent},
  {path:' ', redirectTo:'/home', pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent }
] ;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
