import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/iemployee';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-root',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
    title = 'Yash Technologies';
    employeeRecords: IEmployee[] = [  
  //  employeeRecords: Employee[] = [    //This is also can use of implemented class name as data type.
      {
        id:'emp101',
        name:'Shital Sharma',
        gender:'female',
        salary:75000,
        dateOfBirth:'06/04/1991',
        address:'Magarpatta-DC Pune'
      },
      {
        id:'emp102',
        name:'Ram Verma',
        gender:'male',
        salary:7000000,
        dateOfBirth:'06/04/1991',
        address:'Hadapasar Pune'
      },
      {
        id:'emp103',
        name:'Rahul Verma',
        gender:'male',
        salary:50000,
        dateOfBirth:'11/09/1990',
        address:'Kharadi Pune'
      },
      {
        id:'emp104',
        name:'Rani',
        gender:'female',
        salary:400000,
        dateOfBirth:'10/11/1993',
        address:'ChandanNagar Pune'
      }
    ];

    // Refresh List of Employee...
    getEmployees():void{
      this.employeeRecords=[
        {
          id:'emp101',
          name:'Ram',
          gender:'male',
          salary:1000000,
          dateOfBirth:'06/04/1991',
          address:'Magarpatta-DC Pune'
        },
        {
          id:'emp102',
          name:'Ram Verma',
          gender:'male',
          salary:7000000,
          dateOfBirth:'06/04/1991',
          address:'Hadapasar Pune'
        },
        {
          id:'emp103',
          name:'Rahul Verma',
          gender:'male',
          salary:50000,
          dateOfBirth:'11/09/1990',
          address:'Kharadi Pune'
        },
        {
          id:'emp104',
          name:'Rani',
          gender:'female',
          salary:400000,
          dateOfBirth:'10/11/1993',
          address:'ChandanNagar Pune'
        },
        {
          id:'emp105',
          name:'Ranishah',
          gender:'female',
          salary:70000000,
          dateOfBirth:'10/11/1985',
          address:'Shanivarwada Pune'
        }
      ];
    }

    trackByEmpId(index:number, employee:IEmployee):String{
      return employee.id;
    }

}
