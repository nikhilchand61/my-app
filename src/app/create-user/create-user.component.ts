import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { domainValidator } from '../Validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public userForm:FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)]),
    phone: new FormControl(null, [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    email: new FormControl(null, [Validators.required, Validators.email, domainValidator]),
    address: new FormGroup({
      city: new FormControl(null, [Validators.required]),
      pincode: new FormControl(null, [Validators.required, Validators.min(100000), Validators.max(999999)])
    }),
    type: new FormControl(null, [Validators.required]),
    // busFee: new FormControl(),
    // hostelFee: new FormControl(),
    cards: new FormArray([])
  })

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl(null, [Validators.required]),
        expiry: new FormControl(null, [Validators.required]),
        cvv: new FormControl(null, [Validators.required])
      })
    )
  }
  constructor() {

    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayScholar'){
          // add busFee
          this.userForm.addControl('busFee', new FormControl(null, [Validators.required, Validators.min(10000)]));
          this.userForm.removeControl('hostelFee');
        }
        else if(data=='residential'){
          // add hostelFee
          this.userForm.addControl('hostelFee', new FormControl(null, [Validators.required, Validators.min(15000)]));
          this.userForm.removeControl('busFee');
        }
      }
    )

  }

  ngOnInit(): void {
  }

  create(){
    this.userForm.markAllAsTouched();
    console.log(this.userForm);
  }
  deleteCard(i:number){
    // states reset
    // validators reset
    // dependency remove
    // this.cardsFormArray.controls.splice(i,1);
    this.cardsFormArray.removeAt(i);
  }
}
