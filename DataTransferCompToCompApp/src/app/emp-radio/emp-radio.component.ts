import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emp-radio',
  templateUrl: './emp-radio.component.html',
  styleUrls: ['./emp-radio.component.css']
})
export class EmpRadioComponent {
  constructor() { }

  @Input()
  all:number=10;

  @Input()
  male:number=5;

  @Input()
  female:number=3;


  selectedRadioButtonValue: string="All";

  @Output()
  countRadioButtonSelectionChange:EventEmitter<String>
                        = new EventEmitter<String>();

  onRadioButtonSelectionChange(){
    this.countRadioButtonSelectionChange.emit(this.selectedRadioButtonValue);
  }
 
}
