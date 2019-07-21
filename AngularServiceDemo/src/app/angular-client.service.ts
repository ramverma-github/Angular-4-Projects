import { Injectable } from '@angular/core';
import { IEmployee } from 'src/app/iemployee';

@Injectable({
  providedIn: 'root'
})
export class AngularClientService {

  constructor() { }

  public getEmployeeList(): IEmployee[]{
    return [
      {
        empId:'101',name:'Ram',gender:'Male',annualSalary:1500000,
        dateOfBirth:'06/04/1991',address:'Magarpatta-DC Pune'
      },
      {
        empId:'102',name:'Rajan',gender:'Male',annualSalary:7800000,
        dateOfBirth:'06/04/1991',address:'Crystal IT Park Indore'
      },
      {
        empId:'103',name:'Krishna',gender:'Male',annualSalary:8775720,
        dateOfBirth:'06/04/1991',address:'Bhopal'
      },
      {
        empId:'104',name:'Gayatri',gender:'Female',annualSalary:180000,
        dateOfBirth:'14/01/1995',address:'Mumbai MH'
      },
      {
        empId:'105',name:'Gopal',gender:'Male',annualSalary:7887887,
        dateOfBirth:'06/04/1991',address:'VimanNagar Pune'
      },
    ];
  }

}
