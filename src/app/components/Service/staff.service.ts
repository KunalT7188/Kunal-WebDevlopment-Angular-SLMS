import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, retry, throwError } from 'rxjs';
import { Staff } from '../Model/staff';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Student } from '../Model/student';

@Injectable({
  providedIn: 'root'
})
export class StaffService 
{

  public search = new BehaviorSubject<string>("");

  apiURL: "http://localhost:3000" = "http://localhost:3000";
  constructor(private http:HttpClient) 
  { 

  }
  httpOptions={headers:new HttpHeaders({
    'Content-Type':'application/json'
  })}
  Registration(admin:{a_name:string,a_email:string,a_gender:string,a_password:string,a_address:string,bod:string,a_phone:string}):Observable<Staff> 
  {
   return this.http.post<Staff>(this.apiURL+'/Regsistrations',JSON.stringify(admin),this.httpOptions)
    .pipe(
     retry(1),catchError(this.HandleError)
    )
  }

  
   addStaff(staff:{name:string,email:string,salary:string,dept:string,gender:string,password:string,city:string,doj:string,phone:string}):Observable<Staff> 
   {
    return this.http.post<Staff>(this.apiURL+'/Staffs',JSON.stringify(staff),this.httpOptions)
     .pipe(
      retry(1),catchError(this.HandleError)
     )
   }
   getStaff():Observable<Staff>
  {
    return this.http.get<Staff>(this.apiURL+'/Staffs')
    .pipe(
      retry(1),catchError(this.HandleError)
    )
  }
  deleteStaff(id:any)
  {
    return this.http.delete<Staff>(this.apiURL+'/Staffs/'+id,this.httpOptions)
    .pipe(
      retry(1),catchError(this.HandleError)
    )
  }
  getStaffId(id:any):Observable<Staff>
  {
      return this.http.get<Staff>(this.apiURL+'/Staffs/'+id)
      .pipe(
        retry(1),catchError(this.HandleError)
      )
  }
  updateStaff(id:any,stf:Staff):Observable<Staff>
  {
        return this.http.put<Staff>(this.apiURL+'/Staffs/'+id,JSON.stringify(stf),this.httpOptions)
        .pipe(
          retry(1),catchError(this.HandleError)
        )
  }

  
   HandleError(error:{error:{msg:string;},status:any;msg:any;},)
   {
     
     let errorMsg="";
     if(error.error instanceof ErrorEvent)
     {
       errorMsg=error.error.msg;
     }
     else
     {
       errorMsg='Errorcode : ${error.status}\n Message : ${error.msg}';
     }
     return throwError(errorMsg);
   }
  //-----------------------Student CRUD-----------------------------------//
  
  addStudent(std:{sname:string,semail:string,spassword:string,branch:string,sgender:string,birthDate:string,address:string,admissionDate:string,sphone:string}):Observable<Student> 
  {
   return this.http.post<Student>(this.apiURL+'/Students',JSON.stringify(std),this.httpOptions)
    .pipe(
     retry(1),catchError(this.HandleError)
    )
  }
  getStudent():Observable<Student>
  {
    return this.http.get<Student>(this.apiURL+'/Students')
    .pipe(
      retry(1),catchError(this.HandleError)
    )
  }
  deleteStd(id:any)
  {
    return this.http.delete<Student>(this.apiURL+'/Students/'+id,this.httpOptions)
    .pipe(
      retry(1),catchError(this.HandleError)
    )
  }
  getStudentId(id:any):Observable<Student>
  {
      return this.http.get<Student>(this.apiURL+'/Students/'+id)
      .pipe(
        retry(1),catchError(this.HandleError)
      )
  }
  updateStudent(id:any,stf:Student):Observable<Student>
  {
        return this.http.put<Student>(this.apiURL+'/Students/'+id,JSON.stringify(stf),this.httpOptions)
        .pipe(
          retry(1),catchError(this.HandleError)
        )
  }
  
}
