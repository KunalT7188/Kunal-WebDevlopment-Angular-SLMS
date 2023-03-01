import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from '../Model/staff';
import { StaffService } from '../Service/staff.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
 {


  Department : any=['Computer Science','Elecrtonic ','Mechnaical','Civil','Chemical'];
  constructor(public myRest:StaffService,public route:Router,public atRoute:ActivatedRoute) { }
  staff:any=[];
  ngOnInit(): void 
  {
    
    this.getAllStaff();  
    
  }
  genpassword='';
  public generatePassword()
  {
    if(window.confirm("Do You really want to Genrate a Password ?"))
    {
      this.genpassword = Math.random().toString(36).slice(-8);
    }
    
  }

  @Input() staffadd={name:'',email:'',salary:'',dept:'',gender:'',password:'',city:'',doj:'new Date()',phone:''}
  addStaff() 
  {
    alert("!!!    Staff  Added Succesful !!! ");
    this.myRest.addStaff(this.staffadd).subscribe((data:{})=>
    {
      this.getAllStaff();
    })
  }
  getAllStaff()
  {
    return this.myRest.getStaff().subscribe((data:{})=>{
    this.staff=data;

    })
  }
  deleteStaff(id:any)
  {
    if(window.confirm("Do You really want to Delete ?"))
    {
      this.myRest.deleteStaff(id).subscribe(data=>{
        this.getAllStaff()
      })
    }
  }
  //----------------------------------STUDENT-----------------------------//
  branchyear : any=['ComputerScience-1year','Elecrtonic-1year','Mechnaical-1year','Civil-1year','Chemical-1year',
                    'ComputerScience-2year','Elecrtonic-2year','Mechnaical-2year','Civil-2year','Chemical-2year',
                    'ComputerScience-3year','Elecrtonic-3year','Mechnaical-3year','Civil-3year','Chemical-3year',
                    'ComputerScience-4year','Elecrtonic-4year','Mechnaical-4year','Civil-4year','Chemical-4year',];
  student:any=[];
  sgenpassword='';
  public sgeneratePassword()
  {
    if(window.confirm("Do You really want to Genrate a Password ?"))
    {
      this.sgenpassword = Math.random().toString(36).slice(-8);
    }
    
  }
  @Input() stdadd={sname:'',semail:'',branch:'',sgender:'',spassword:'',address:'',birthDate:'new Date()',admissionDate:'new Date()',sphone:''}
  addStudent() 
  {
    alert("!!!    Student  Added Succesful !!! ");
    this.myRest.addStudent(this.stdadd).subscribe((data:{})=>
    {
      this.route.navigate(['\List']);
    })
  }
}
