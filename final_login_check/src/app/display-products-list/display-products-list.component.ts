import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginServiceService } from '../createdClasses/login-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductsClass } from '../createdClasses/products-class';
@Component({
  selector: 'app-display-products-list',
  imports: [CommonModule],
  templateUrl: './display-products-list.component.html',
  styleUrl: './display-products-list.component.css'
})
export class DisplayProductsListComponent 
{
  productsList: any[]=[];
  products:ProductsClass=new ProductsClass(0,'','',0,0);
  displayPrice=0;
  selectedItemId:number=0;

  constructor(public httpClient: HttpClient, private route:Router, private loginService: LoginServiceService) 
  {
    this.loginService.getProducts().subscribe((prods)=>{

      console.log(prods);
      this.productsList=prods;
      console.log("Product Data:", this.productsList); 
    }
  );
  }

  moveToPaymentsPage(product_id:number )
  { 
    this.route.navigateByUrl('/payment');
     this.loginService.getProductById(product_id).subscribe(
      (data:any)=>
        {
          this.products=new ProductsClass( data.prod_id, data.prod_name, data.prod_desc, data.prod_rating, data.prod_price);
          console.log(typeof this.products);
          this.loginService.theProductId=this.products.id;
          this.loginService.theProdName=this.products.name;
          this.loginService.theProdDesc=this.products.description;
          this.loginService.theProdRating=this.products.rating;
          this.loginService.theProdPrice=this.products.price;
          }
     ); 
  }



 
}
    