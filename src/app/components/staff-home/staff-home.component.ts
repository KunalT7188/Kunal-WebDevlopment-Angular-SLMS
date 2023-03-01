import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../Service/staff.service';

@Component({
  selector: 'app-staff-home',
  templateUrl: './staff-home.component.html',
  styleUrls: ['./staff-home.component.css']
})
export class StaffHomeComponent 
{
  student:any=[];
  searchkey:string="";
  searchBranch:string=""; 

  constructor(public myRest:StaffService,public route:Router,public atRoute:ActivatedRoute) { }
 
  ngOnInit(): void 
  {
    
    this.getAllStudent();  
    this.myRest.search.subscribe(data=>{
           this.searchkey =data;
    })
    
  }
  branchyear : any=['ComputerScience-1year','Elecrtonic-1year','Mechnaical-1year','Civil-1year','Chemical-1year',
                    'ComputerScience-2year','Elecrtonic-2year','Mechnaical-2year','Civil-2year','Chemical-2year',
                    'ComputerScience-3year','Elecrtonic-3year','Mechnaical-3year','Civil-3year','Chemical-3year',
                    'ComputerScience-4year','Elecrtonic-4year','Mechnaical-4year','Civil-4year','Chemical-4year',
                   ];

search(event:any)
{
  this.searchBranch = (event.target as HTMLInputElement).value;
  this.myRest.search.next(this.searchBranch)
}

getAllStudent()
{
  return this.myRest.getStudent().subscribe((data:{})=>{
  this.student=data;

  })
}

}
