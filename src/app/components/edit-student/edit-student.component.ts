import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../Service/staff.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent 
{
  branchyear : any=['ComputerScience-1year','Elecrtonic-1year','Mechnaical-1year','Civil-1year','Chemical-1year',
                    'ComputerScience-2year','Elecrtonic-2year','Mechnaical-2year','Civil-2year','Chemical-2year',
                    'ComputerScience-3year','Elecrtonic-3year','Mechnaical-3year','Civil-3year','Chemical-3year',
                   'ComputerScience-4year','Elecrtonic-4year','Mechnaical-4year','Civil-4year','Chemical-4year',
                  ];

sgenpassword='';
public sgeneratePassword()
{
if(window.confirm("Do You really want to Genrate a Password ?"))
{
this.sgenpassword = Math.random().toString(36).slice(-8);
}

}
  constructor(public myRest:StaffService,public atRoute:ActivatedRoute,public route:Router)
  {

  }
  id=this.atRoute.snapshot.params['id'];
  studentData:any={};
  ngOnInit()
  {
   
    this.myRest.getStudentId(this.id).subscribe((data:{})=>{ this.studentData =data;})  
  }
  editStudent()
  {
    if(window.confirm("Do you want to Update ?"))
       {
            this.myRest.updateStudent(this.id,this.studentData).subscribe((data)=>{
            this.route.navigate(['/List']);
          })
       }
  }
}
