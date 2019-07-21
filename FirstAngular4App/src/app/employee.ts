import { IEmployee } from "src/app/iemployee";

export class Employee implements IEmployee{
  //  public id:String;
  //  public name:String;
  //  public gender:String;
  //  public salary:number;
  //  public dateOfBirth:String;
  //  public address:String;

   //   constructor( id:String, name:String, gender:String, 
   //   salary:number, dateOfBirth:String, address:String){
   //      this.id=id;
   //      this.name=name;
   //      this.gender=gender;
   //      this.salary=salary;
   //      this.dateOfBirth=dateOfBirth;
   //      this.address=address; 
  //    }

      constructor(public id:String, public name:String, public gender:String, 
       public salary:number, public dateOfBirth:String, public address:String){}
}
