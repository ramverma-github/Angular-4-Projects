import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import{ Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HttpModule } from '@angular/Http';


const appRoutes : Routes =[
  {path:'home', component:HomeComponent},
  {path:'aboutUs', component:AboutUsComponent},
  {path:'contact', component:ContactComponent},
  {path:' ', redirectTo:'/home', pathMatch:'full'},
  {path: '**', component: HomeComponent }
] ;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    TableComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
