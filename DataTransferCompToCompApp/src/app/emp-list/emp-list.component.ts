import { Component } from '@angular/core';
import { IEmployee } from 'src/app/iemployee';

@Component({
  selector: 'app-root',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent {

  employeeList: IEmployee[];
  constructor() {
    this.employeeList=[
      {
        empId:'emp101',name:'Ram',gender:'Male',annualSalary:25000,
        dateOfBirth:'06/04/1991',address:'Magarpatta-DC Pune'
      },
      {
        empId:'emp102',name:'Shyam',gender:'Male',annualSalary:14000,
        dateOfBirth:'10/11/1992',address:'Magarpatta-DC Pune'
      },
      {
        empId:'emp103',name:'Roshni',gender:'Female',annualSalary:7844,
        dateOfBirth:'06/06/1994',address:'Magarpatta-DC Pune'
      },
      {
        empId:'emp104',name:'Jyoti',gender:'Female',annualSalary:17000,
        dateOfBirth:'16/08/1988',address:'Magarpatta-DC Pune'
      }
    ];
   }

   getEmployeeList(): void{
     this.employeeList=[
      {
        empId:'emp101',name:'Ram',gender:'Male',annualSalary:25000,
        dateOfBirth:'06/04/1991',address:'Magarpatta-DC Pune'
      },
      {
        empId:'emp102',name:'Shyam',gender:'Male',annualSalary:14000,
        dateOfBirth:'10/11/1992',address:'Magarpatta-DC Pune'
      },
      {
        empId:'emp103',name:'Roshni',gender:'Female',annualSalary:78454,
        dateOfBirth:'06/06/1994',address:'Magarpatta-DC Pune'
      },
      {
        empId:'emp105',name:'Jaya',gender:'Female',annualSalary:1000,
        dateOfBirth:'05/01/1981',address:'Kharadi Pune'
      },
      {
        empId:'emp106',name:'Rajesh',gender:'Male',annualSalary:1200,
        dateOfBirth:'05/10/1990',address:'Indore M.P.'
      },
      {
        empId:'emp104',name:'Jyoti',gender:'Female',annualSalary:17000,
        dateOfBirth:'16/08/1988',address:'Kalyani Nagar Pune'
      },
      {
        empId:'emp107',name:'Pawan',gender:'Male',annualSalary:8500,
        dateOfBirth:'15/08/1995',address:'Crystal IT Park Indore'
      }
    ];
   }

   getTotalEmployeeCount():number{
     return this.employeeList.length;
   }

   getMaleEmployeeCount():number{
     return this.employeeList.filter(e => e.gender === 'Male').length;
   }

   getFemaleEmployeeCount():number{
     return this.employeeList.filter(e => e.gender === 'Female').length;
   }

   selectedEmployeeRadioButtonCount: string="All";

   onEmployeeCountRadioButtonChange(selectedRadioButton:string):void{
    this.selectedEmployeeRadioButtonCount=selectedRadioButton;
   }

   trackByEmpId(index:number, employee:IEmployee):String{
     console.log("TrackBy Employee Id>>>");
     return employee.empId;
   }

   getDeleteEmployeeList():void{
     this.employeeList=[];
   }
}
