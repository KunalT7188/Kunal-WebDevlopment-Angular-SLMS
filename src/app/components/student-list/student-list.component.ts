import { Component } from '@angular/core';
import { StaffService } from '../Service/staff.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent
{
 
  student:any=[];
  constructor(public restService:StaffService)
  {
    
  }
  ngOnInit()
  {
    this.loadStudent();

  }
  loadStudent()
  {
    return this.restService.getStudent().subscribe((data:{})=>{
    this.student=data;

    })
  }
  deleteStudent(id:any)
  {
    if(window.confirm("Do You really want to Delete Record ?"))
    {
      this.restService.deleteStd(id).subscribe(data=>{
        this.loadStudent();
      })
    }
  }
}
