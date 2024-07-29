import { Component, OnInit } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit {

  public amazonProducts:any = [];
  
  constructor(private _amazonService:AmazonService) {
    _amazonService.getAmazonProducts().subscribe(
      (data:any)=>{
        this.amazonProducts = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    );
  }

  ngOnInit(): void {
  }

  mensClothing(){
    this.amazonProducts = this.amazonProducts.filter((product:any)=>product.category.includes("men's clothing"));
  }
  jewelery(){
    this.amazonProducts = this.amazonProducts.filter((product:any)=>product.category.includes("jewelery"));
  }
  elec(){
    this.amazonProducts = this.amazonProducts.filter((product:any)=>product.category.includes("electronics"));
  }
  women(){
    this.amazonProducts = this.amazonProducts.filter((product:any)=>product.category.includes("women's clothing"));
  }
  filter7to50(){
    this.amazonProducts = this.amazonProducts.filter((product:any)=>product.price>=7 && product.price<=50);
  }
  filter50to300(){
    this.amazonProducts = this.amazonProducts.filter((product:any)=>product.price>50 && product.price<=300);
  }
  filter300to600(){
    this.amazonProducts = this.amazonProducts.filter((product:any)=>product.price>300 && product.price<=600);
  }
  filter600to1000(){
    this.amazonProducts = this.amazonProducts.filter((product:any)=>product.price>600 && product.price<=1000);
  }
  sortProducts(event: any){
    let value = event.target.value;
    if(value === "lth"){
      this.amazonProducts = this.amazonProducts.sort((a:any,b:any)=>a.price-b.price);
    }
    else if(value === "htl"){
      this.amazonProducts = this.amazonProducts.sort((a:any,b:any)=>b.price-a.price);
    }
    else{
      this._amazonService.getAmazonProducts().subscribe(
        (data:any)=>{
          this.amazonProducts = data;
        },
        (err:any)=>{
          alert("Internal Server Error");
        }
      );
    }
  }
}
