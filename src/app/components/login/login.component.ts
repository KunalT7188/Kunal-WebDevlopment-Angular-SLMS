import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from '../Service/staff.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
 {
  constructor(private fb:FormBuilder,public route:Router ,public myRest:StaffService)
  {

  }
  myForm = new FormGroup({
    UserName: new FormControl ('',[Validators.required,Validators.pattern("^[a-z0-9._]+@[a-z]+\\.[a-z]{2,6}$")]), 
    password: new FormControl ('',[Validators.required]),
    
  },);
 
 
  Login()
  {
    
    if(this.myForm.get('password')?.value=="Admin" && this.myForm.get('UserName')?.value=="admin@gmail.com")
    {
      alert("!!!    Login Successful >>> Welcome  To Admin Portal   !!! ");
      this.route.navigate(['/Home']);
    }
    else if(this.myForm.get('password')?.value=="Staff" && this.myForm.get('UserName')?.value=="staff@staff.com")
    {
      alert("!!!    Login Successful >>> Welcome  To Staff Portal   !!! ");
       this.route.navigate(['/StaffHome']);
    }
    else if(this.myForm.get('password')?.value=="Student" && this.myForm.get('UserName')?.value=="student@slms.com")
    {
      alert("!!!    Login Successful >>> Welcome  To Student Portal   !!! ");
       this.route.navigate(['/StudentHome']);
    }
    else
    {
      alert("Login UnSuccessful : "+JSON.stringify(this.myForm.value));
    }
  }
   //----------------------------------STUDENT-----------------------------//
  

sgenpassword='';
public sgeneratePassword()
{
if(window.confirm("Do You really want to Genrate a Password ?"))
{
this.sgenpassword = Math.random().toString(36).slice(-8);
}

}
@Input() admin={a_name:'',a_email:'',a_gender:'',a_password:'',a_address:'',bod:'new Date()',a_phone:''}
Reg() 
{
    alert("!!!  Registration Successful.......Thank You   !!!");
    this.myRest.Registration(this.admin).subscribe((data:{})=>
    {
        this.route.navigate(['\Login']);
    })
  }
}

 

