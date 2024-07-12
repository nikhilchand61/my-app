import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public name:string = "";
  public price:number = 0;
  public rating:number = 0;

  public cartItems:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(name: string, price: number, rating: number){
    this.cartItems.push({name, price, rating});
    this.reset();
  }
  reset(){
    this.name = '';
    this.price = 0;
    this.rating = 0;
  }

}
