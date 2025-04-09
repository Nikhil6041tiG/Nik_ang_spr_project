import { Component } from '@angular/core';
import { LoginServiceService } from '../createdClasses/login-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valid-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './valid-component.component.html',
  styleUrl: './valid-component.component.css'
})
export class ValidComponentComponent {

  userEnteredOtp:String='';
  message:String='';
  isValid:boolean=true;
  emailIdValid:String='';

  constructor(private loginService:LoginServiceService)
  {
    this.emailIdValid=this.loginService.emailId;
    
  }

  submitOTP()
  {
    console.log(this.userEnteredOtp);
    if(!this.loginService.VerifyOtp(this.userEnteredOtp))
    {
      this.isValid=false;
      this.message="Invalid OTP.. check "+this.emailIdValid+" and retry again..";
      console.log("login failed..");
    }
  }
}