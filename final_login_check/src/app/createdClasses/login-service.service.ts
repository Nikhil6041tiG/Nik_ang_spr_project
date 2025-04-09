import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsClass } from './products-class';
import { Observable } from 'rxjs';
import { DisplayProductsListComponent } from '../display-products-list/display-products-list.component';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  // doubleCheckPrice=0;

  loginFormOtp:String='';
  emailId:String='';
  
  theProductId!:number;
  theProdName!:String;
  theProdDesc!:String;
  theProdRating!:number;
  theProdPrice!:number;
  
  public product:ProductsClass=new ProductsClass(0,'','',0,0);
  

  constructor(private route:Router, private httpClient:HttpClient) {}
  
  VerifyOtp(UserOtp:String):boolean
  {
    if(this.loginFormOtp===UserOtp)
    {
      console.log("Hacked successfully.. the OTP ",UserOtp);
      this.route.navigate(['/products']);
      return true;
    }
    else{
      console.log("Incorrect OTP.. Retry");
      return false;
    }
  }
  getProducts():Observable<ProductsClass[]>
  {
    this.route.navigate(['/products']);
    return this.httpClient.get<ProductsClass[]>("http://localhost:9090/api/prodsList");
    
  }

  getProductById(productId:number):Observable<ProductsClass>
  {
    return this.httpClient.get<ProductsClass>("http://localhost:9090/api/fetchById/"+productId)
  }

}