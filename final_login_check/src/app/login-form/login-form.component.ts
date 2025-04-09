import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginServiceService } from '../createdClasses/login-service.service';
import { error } from 'console';
import { ValidComponentComponent } from '../valid-component/valid-component.component';
@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent 
{

  message:String='';
  showPassword = false;
  password: string = '';
  isLoading=false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  loginForm:FormGroup;
  constructor(private fb:FormBuilder, private httpClient:HttpClient, private route:Router, private loginService:LoginServiceService, 
    ){
  
    this.loginForm=this.fb.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required, Validators.minLength(8),
                     Validators.pattern('^(?=.*[A-Z])(?=.*[\\d])(?=.*[!@$%&*_?])[A-Za-z\\d!@$%&*_?]{8,}$')
        ]]
      }
    );  
  }

  submitForm()
  {
    if(this.loginForm.valid)
    {
      this.isLoading=true;
      this.httpClient.post("http://localhost:9090/api/loginPage",this.loginForm.value).subscribe(
        (response:any)=>
        {
          if(response.valid==="success")
          {
            this.message=response.message;
            console.log(this.message);
            if(response.SpringOtp)
            {
              this.loginService.loginFormOtp=response.SpringOtp;
              this.isLoading=false;
              this.loginService.emailId=this.loginForm.value.email;
              this.route.navigate(['/valid']);
            }
            console.log("The otp : ",response.SpringOtp);
          }
          else
          {
            console.log("Incorrect details");
            this.message="Incorrect details";
          }
        },
        error=>
          {
            this.message="Error occured.."
          }
      );
    }
    else{
      this.message="Enter valid details";      
    }
  }
}
