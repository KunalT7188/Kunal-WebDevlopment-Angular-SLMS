import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../Service/staff.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent 
{
  student:any=[];
  public image="/assets/studenthome.jpg";
  constructor(public myRest:StaffService,public route:Router,public atRoute:ActivatedRoute) { }
 
  ngOnInit(): void 
  {
    
    this.getAllStudent(); 
  }
  getAllStudent()
  {
    return this.myRest.getStudent().subscribe((data:{})=>{
    this.student=data;
  
    })
  }
   

}
