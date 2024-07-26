import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

  public id:string = "";

  constructor(private _accountService:AccountService, private _activatedRoute:ActivatedRoute) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;
        _accountService.getAccount(data.id).subscribe(
          (data:any)=>{
            this.accountForm.patchValue( data );
          }
        )
      }
    )
  }

  ngOnInit(): void {
  }

  submit(){
    // console.log(this.accountForm);
    if(this.id){
      this._accountService.updateAccount(this.accountForm.value, this.id).subscribe(
        (data:any)=>{
          alert("Updated Successfully!!!");
          this.accountForm.reset();
        },
        (err:any)=>{
          alert("Internal Server Error");
        }
      )
    }
    else{
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

}
