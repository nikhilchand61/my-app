import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent implements OnInit {

  public item:string = "";
  public totalPrice:number = 0;
  public totalItems:number = 0;
  public newProduct = {
    name: '',
    price: 0,
    rating: 0,
    freedelivery: false
  };
  
  public products:any[] = [
    {name: 'pen', price: 10, rating: 3, freedelivery: false},
    {name: 'phone', price: 100000, rating: 4.8, freedelivery: true},
    {name: 'shirt', price: 2000, rating: 4, freedelivery: true},
    {name: 'cap', price: 4000, rating: 5, freedelivery: true},
    {name: 'mobile case', price: 200, rating: 3.5, freedelivery: false},
    {name: 'remote', price: 799, rating: 2.5, freedelivery: false},
    {name: 'watch', price: 8000, rating: 4.4, freedelivery: true},
    {name: 'mouse', price: 499, rating: 3.9, freedelivery: false},
    {name: 'shoes', price: 999, rating: 3.7, freedelivery: false},
    {name: 'laptop', price: 60000, rating: 4.7, freedelivery: true}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
  search(item:string){
    this.products = this.products.filter(product=>product.name.includes(item));
  }
  free_del(){
    this.products = this.products.filter(product=>product.freedelivery==true);
  }
  plth(){
    this.products = this.products.sort((a,b)=>a.price-b.price);
  }
  phtl(){
    this.products = this.products.sort((a,b)=>b.price-a.price);
  }
  rlth(){
    this.products = this.products.sort((a,b)=>a.rating-b.rating);
  }
  rhtl(){
    this.products = this.products.sort((a,b)=>b.rating-a.rating);
  }
  discount(){
    this.products = this.products.map(product=>{
      product.price = product.price/2;
      return product;
    });
  }
  del_charges(){
    this.products = this.products.map(product=>{
      if(product.freedelivery == false){
        product.price = product.price+40;
      }
      return product;
    });
  }
  total(){
    this.totalPrice = this.products.reduce((sum,a)=>sum+a.price,0);
    // alert("The total price of all products is: " +this.totalPrice);
  }
  total_items(){
    this.totalItems = this.products.length;
    // alert("The total no.of products are: "+this.totalItems);
  }
  del(i:number){
    this.products.splice(i,1);
  }
  addToCart() {
    this.products.push({ ...this.newProduct });
    this.newProduct = { name: '', price: 0, rating: 0, freedelivery: false };
  }
}