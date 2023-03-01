import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../Service/staff.service';

@Component({
  selector: 'app-student-assignment',
  templateUrl: './student-assignment.component.html',
  styleUrls: ['./student-assignment.component.css']
})
export class StudentAssignmentComponent 
{
  technology : any=['C lang','C++','Java','Asp.Net','Python','Angular-Spring','React'];
  Grade      : any=['A+','A','B+','B','C','Fail'];
  constructor(public myRest:StaffService,public atRoute:ActivatedRoute,public route:Router)
  {

  }
  
  id=this.atRoute.snapshot.params['id'];
  studentData:any={};
  ngOnInit()
  {
   
    this.myRest.getStudentId(this.id).subscribe((data:{})=>{ this.studentData =data;})  
  }
 
  editStudent(): void
  {
    if(window.confirm("Do you want to Assign ?"))
       {
            this.myRest.updateStudent(this.id,this.studentData).subscribe((data)=>{
            this.route.navigate(['/StaffHome']);
          })      
       }
}
}
