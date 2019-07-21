import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  //templateUrl: './event-binding.component.html',
  template:`<button (click)='onClick()' >Click me</button> 
  <button on-click='onClick()'>Click me</button>` // This is by Angular JS and above is normal JS
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick():void{
    console.log('Button Clicked');
  }
}
