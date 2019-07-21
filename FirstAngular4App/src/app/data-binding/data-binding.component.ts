import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
 // styleUrls: ['./data-binding.component.css']

  // templateUrl: './app.component.html',
 // template:`<button class='colorClass'>My Button</button>`,
  //CSS Class binding in Angular
  //template:`<button [class]='classesToApply'>My Button</button>`
  //style Binding
  //template: `<button style="color:red">My Button</button>`
  //  template: `<button style='color:red'
  //             [style.font-weight]="isBold ? 'bold' : 'normal'">My Button
  //            </button> `
  //To set multiple inline styles use NgStyle directive
  //template: `<button style='color:red' [ngStyle]="addStyles()">My Button</button>`
  //template:`<h1>{{'Name = ' + firstName}}</h1>`,
 // template: `<h1>{{ firstName ? firstName : 'No name specified'}}</h1>`,


})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  id=101;
  name='Ram,';
  address='Pune';
  mobileNo='9874563210'
  emailId='abc.rb@yash.com';

  colspan=2;

  isBold: boolean = true;
  fontSize: number = 20;
  isItalic: boolean = true;

  addStyles() {
    let styles = {
        'font-weight': this.isBold ? 'bold' : 'normal',
        'font-style': this.isItalic ? 'italic' : 'normal',
        'font-size.px': this.fontSize    };
    return styles;
}
  title:string = 'YASH';
  firstName:string = 'Ram';
  lastName:string = 'Lakhan';
  gender:string = 'Male';
  age:string = '25';

  colSpan:number = 2
  borDer:number= 1

  isDisabled1:boolean = true;
  isDisabled2:boolean = true;

  classesToApply: string = 'colorClass italicsClass boldClass';


}
