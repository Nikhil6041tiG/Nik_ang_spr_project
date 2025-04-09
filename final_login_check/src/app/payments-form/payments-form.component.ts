import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginServiceService } from '../createdClasses/login-service.service';
import { ProductsClass } from '../createdClasses/products-class';

@Component({
  selector: 'app-payments-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './payments-form.component.html',
  styleUrl: './payments-form.component.css'
})
export class PaymentsFormComponent 
{
  // prod_amount:number=1000;
  isSelectedUpi:boolean=true;
  isSelectedDebit:boolean=true;
  paymentHierarchy:number=0;

  isSelected:String='';
  
  selectedProduct!:ProductsClass;
  takeSelectedId!:number;

  upiForm:FormGroup;
  debitForm:FormGroup;
  netBankForm:FormGroup;
  
  
  newPrice:number=0;
  selectedItemId!:number;
  selectedItemName!:String;
  selectedItemDesc!:String;
  selectedItemRating!:number;
  selectedItemPrice!:number;
  

  constructor(public fb:FormBuilder, private loginService:LoginServiceService)
  {
    this.upiForm=this.fb.group({
      upiId:['',[Validators.required, Validators.email]]
    });

    console.log("selected upi : ",this.paymentHierarchy);

    this.debitForm=this.fb.group(
      {
        debitCardNum:['',[Validators.required], [Validators.maxLength(16)]],
        
      });

    if(this.isSelectedUpi)
      {
        this.paymentHierarchy=1;
      }
      else{
        this.paymentHierarchy=0;
      }
      this.netBankForm=this.fb.group(
        {

        }
      )
  }

  ngOnInit():void{
    setTimeout(() => {
      this.newPrice=this.loginService.theProdPrice;
      this.selectedItemId=this.loginService.theProductId;
      this.selectedItemName=this.loginService.theProdName;
      this.selectedItemDesc=this.loginService.theProdDesc;
      this.selectedItemRating=this.loginService.theProdRating;
      this.selectedItemPrice=this.loginService.theProdPrice;
    }, 100); 
  }

  formatNumber()
  {
    let raw=this.debitForm.value.debitCardNum.replace(/\D/g,''); 
// /\D/g is a regex or regular expression, which matches the chars which are not numbers, otherthan numbers, it finds other chars
    raw=raw.slice(0,16);
    let parts=raw.match('/.{1,4}/g')
    this.debitForm.value.debitCardNum=parts? parts.join(' '):'';


  }
    
  upiSubmit()
  {
    if(this.upiForm.valid){
      console.log("requirements matched! upiSubmit method");
      console.log("upi id:",this.upiForm.value.upiId);
    }
    else{
      alert('Please enter a valid UPI ID!');
    }
    
  }
  get paymentMethod() {
    return this.debitForm.get('paymentMethod');
  }

  debitSubmit()
  {if(this.debitForm.valid )
  {
    console.log("Im at onsubmit method");
    if(this.paymentMethod?.value=='upi')
    {
      alert('Payment Successful!');
    }
  }
  }

}
