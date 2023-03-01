import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../Service/staff.service';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent 
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
 
}
