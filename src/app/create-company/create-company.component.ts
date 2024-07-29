import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  public companyForm:FormGroup = new FormGroup({
    companyName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    founded: new FormControl(),
    ceo: new FormControl(),
    location: new FormGroup({
      address: new FormControl(),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(),
      zipcode: new FormControl(),
      country: new FormControl()
    }),
    departments: new FormArray([]),
    companyType: new FormControl()
  })

  get departmentsFormArray(){
    return this.companyForm.get('departments') as FormArray;
  }

  addDept(){
    this.departmentsFormArray.push(
      new FormGroup({
        deptName: new FormControl(),
        deptHead: new FormControl(),
        employees: new FormControl(),
        budget: new FormControl(null, [Validators.required, Validators.min(50000)])
      })
    )
  }
  
  constructor() {
    this.companyForm.get('companyType')?.valueChanges.subscribe(
      (data:any)=>{
        if(data == 'service'){
          // add clientName
          this.companyForm.addControl('clientName', new FormControl(null, [Validators.required, Validators.minLength(3)]));
          this.companyForm.removeControl('productName');
        }
        else if(data == 'product'){
          // add productName
          this.companyForm.addControl('productName', new FormControl());
          this.companyForm.removeControl('clientName');
        }
      }
    )
  }

  ngOnInit(): void {
  }

  deleteDept(i:number){
    this.departmentsFormArray.removeAt(i);
  }
  create(){
    this.companyForm.markAllAsTouched();
    console.log(this.companyForm);
  }
}
