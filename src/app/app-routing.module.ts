import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditStaffComponent } from './components/edit-staff/edit-staff.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StaffHomeComponent } from './components/staff-home/staff-home.component';
import { StudTaskProgressComponent } from './components/stud-task-progress/stud-task-progress.component';
import { StudentAssignmentComponent } from './components/student-assignment/student-assignment.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentResultComponent } from './components/student-result/student-result.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'Login' },
  {path:'Login',component:LoginComponent},
  {path:'Home',component:HomeComponent},
  {path:'List',component:StudentListComponent},
  {path:'Edit/:id',component:EditStaffComponent},
  {path:'studentEdit/:id',component:EditStudentComponent},
  {path:'StaffHome',component:StaffHomeComponent},
  {path:'studenttask/:id',component:StudentAssignmentComponent},
  {path:'StudentHome',component:StudentHomeComponent},
  {path:'studentProgress/:id',component:StudTaskProgressComponent},
  {path:'studentResult/:id',component:StudentResultComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
