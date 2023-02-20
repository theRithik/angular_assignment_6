import { Component, OnInit } from '@angular/core';
import { CommonservicesService } from '../service/commonservices.service';
import { Employee } from './color';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  Employee: any;
constructor(private _deatils:CommonservicesService){}

  inputValue:any="rithik"
  name:string="edureka"
  value= "edit"
  searchInput=''
  employees: Employee[]=[
    {
  
    id:'',
    employee_name:'', 
    employee_salary:'',
    employee_age:'',
    }
  ]
  
  ngOnInit(){
    this._deatils.getEmployees().subscribe(
      (val)=>{
      this.Employee=val
    },
    (err: any)=>{
      console.log(err);
    })
  
  }
  
    
  
  
  
  }
  
