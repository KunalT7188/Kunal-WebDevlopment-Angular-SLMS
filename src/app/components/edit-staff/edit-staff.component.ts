import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../Service/staff.service';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent 
{
  Department : any=['Computer Science','Elecrtonic ','Mechnaical','Civil','Chemical'];
  constructor(public myRest:StaffService,public atRoute:ActivatedRoute,public route:Router)
  {

  }
  id=this.atRoute.snapshot.params['id'];
  staffData:any={};
  ngOnInit()
  {
   
    this.myRest.getStaffId(this.id).subscribe((data:{})=>{ this.staffData =data;})  
  }
  editStaff()
  {
    if(window.confirm("Do you want to Update ?"))
       {
            this.myRest.updateStaff(this.id,this.staffData).subscribe((data)=>{
            this.route.navigate(['/Home']);
          })
       }
  }
}
