import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../Service/staff.service';

@Component({
  selector: 'app-stud-task-progress',
  templateUrl: './stud-task-progress.component.html',
  styleUrls: ['./stud-task-progress.component.css']
})
export class StudTaskProgressComponent 
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
  editStudent()
  {
    if(window.confirm("Do you want to Submit ?"))
       {
            this.myRest.updateStudent(this.id,this.studentData).subscribe((data)=>{
            this.route.navigate(['/StudentHome']);
          })
       }
  }
}
