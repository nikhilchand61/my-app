import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public accounts:any = [];
  public term:string = "";
  public column:string = "";
  public order:string = "";
  public limit:number = 0;
  public page:number = 0;

  constructor(private _accountService:AccountService) {
    _accountService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    );
  }

  ngOnInit(): void {
  }
  filter(){
    this._accountService.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    );
  }

  sortAccounts(){
    this._accountService.getSortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    );
  }

  pageAccounts(){
    this._accountService.getPagedAccounts(this.limit,this.page).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    );
  }
}
