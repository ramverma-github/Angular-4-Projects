import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-db',
//templateUrl: './two-way-db.component.html',
//styleUrls: ['./two-way-db.component.css']   
 template: `
                Name : <input [value]='name' (input)='name = $event.target.value' on-click='onClick()'>
                <br>
                Name : <input [(ngModel)]='name' on-click='onClick()'> <br>                 
                You entered : {{name}}
              ` 
})
export class TwoWayDBComponent {
   name:String='Enter Your Name';
   
   onClick():void{
    console.log('Remove the default value...'+this.name);
    this.name = '';
  }
 
}
