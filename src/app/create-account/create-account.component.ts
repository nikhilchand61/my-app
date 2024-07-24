import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public accountForm:FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl()
  })

  constructor(private _accountService:AccountService) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.accountForm);
    this._accountService.createAccount(this.accountForm.value).subscribe(
      (data:any)=>{
        alert("Created Successfully");
        this.accountForm.reset();
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    );
  }

}
