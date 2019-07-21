import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/iemployee';
import { AngularClientService } from 'src/app/angular-client.service';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-root',
  templateUrl: './angular-service.component.html',
  styleUrls: ['./angular-service.component.css'],
  providers:[AngularClientService]
})
export class AngularServiceComponent implements OnInit {

  employeeList: IEmployee[];
  
  constructor(private _AngService:AngularClientService) {
    console.log('***** AngularServiceComponent Constructor *****');
   }

  ngOnInit() {
    console.log('***** AngularServiceComponent ngOnInit() *****');
    this.employeeList = this._AngService.getEmployeeList();
  }

}
