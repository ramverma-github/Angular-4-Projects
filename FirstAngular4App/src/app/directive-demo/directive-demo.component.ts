import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  //templateUrl: './directive-demo.component.html',
  //styleUrls: ['./directive-demo.component.css']
  styles:[
    '.firstClass { color:red }',
    '.secondClass { font-weight:bold; }',
    '.thirdClass { text-decoration: underline; }'],

  template:`
  <!-- NgIf -->
  <p *ngIf='ifvar; then trueBlock else falseBlock'></p>
  <ng-template #trueBlock>
    <label>ifvar was set to true.</label>
  </ng-template>
  <ng-template #falseBlock>
    <label>ifvar was set to false.</label>
  </ng-template>

  <!-- NgFor-->
  <p *ngFor='let element of forArray; let ind = index'>
    NgFor's element {{ind}} = {{element}}
  </p>

  <!-- NgSwitch, NgSwitchCase, NgSwitchDefault -->
  <div [ngSwitch]='switchVar'>
    <p *ngSwitchCase='1'>The NgSwitch value is Choice 1</p>
    <p *ngSwitchCase='2'>The NgSwitch value is Choice 2</p>
    <p *ngSwitchCase='3'>The NgSwitch value is Choice 3</p>

    <p *ngSwitchDefault>Another choice was selected</p>
  </div>

  <!-- NgClass -->
  <div [ngClass]='classArray'>
    <p>This element is in firstClass and secondClass</p>
    <p [ngClass]='addClass'>
      This element is in firstClass, secondClass, and thirdClass
    </p>
  </div> 

  <!-- NgStyle -->
  <p [ngStyle]="{'color': fontColor, 'font-size': fontSize}">
    This style is set by NgStyle.
  </p> 


  `
})
export class DirectiveDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public ifvar = true;
  public forArray = ['A', 'B', 'C', 'D'];
  public switchVar = 1;
  public classArray = ['firstClass', 'secondClass'];
  public addClass = {'thirdClass' : true};
  public fontColor = 'green';
  public fontSize = '18px';

}
