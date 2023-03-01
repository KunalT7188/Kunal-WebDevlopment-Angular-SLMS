import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


import { HttpClientModule } from '@angular/common/http';
import { EditStaffComponent } from './components/edit-staff/edit-staff.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TitlePipe } from './components/Pipe/title.pipe';
import { StudentListComponent } from './components/student-list/student-list.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StaffHomeComponent } from './components/staff-home/staff-home.component';
import { StudentAssignmentComponent } from './components/student-assignment/student-assignment.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { StudTaskProgressComponent } from './components/stud-task-progress/stud-task-progress.component';
import { StudentResultComponent } from './components/student-result/student-result.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { SearchfilterPipe } from './components/Pipe/searchfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    EditStaffComponent,
    TitlePipe,
    StudentListComponent,
    EditStudentComponent,
    StaffHomeComponent,
    StudentAssignmentComponent,
    StudentHomeComponent,
    StudTaskProgressComponent,
    StudentResultComponent,
    SearchfilterPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,MatCardModule,MatToolbarModule,
    MatButtonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
