import { Component, OnInit } from '@angular/core';
import { StudentCardService } from '../student-card.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-student-card',
  templateUrl: './create-student-card.component.html',
  styleUrls: ['./create-student-card.component.css']
})
export class CreateStudentCardComponent implements OnInit {

  public studentForm:FormGroup = new FormGroup({
    name: new FormControl(),
    dob: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    profile_picture: new FormControl()
  })

  public id:string = "";

  constructor(private _studentCardService:StudentCardService, private _activatedRoute:ActivatedRoute) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;
        _studentCardService.getStudentDetails(data.id).subscribe(
          (data:any)=>{
            this.studentForm.patchValue(data);
          }
        )
      }
    )
  }

  ngOnInit(): void {
  }

  submit(){

    if(this.id){
      // edit
      this._studentCardService.updateStudent(this.studentForm.value,this.id).subscribe(
        (data:any)=>{
          alert("Updated Successfully!!!");
          this.studentForm.reset();
        },
        (err:any)=>{
          alert("Internal Server Error");
        }
      )
    }
    else{
      // create
      this._studentCardService.createStudent(this.studentForm.value).subscribe(
        (data:any)=>{
          alert("Created Successfully!!!");
          this.studentForm.reset();
        },
        (err:any)=>{
          alert("Internal Server Error");
        }
      )
    }

  }

}
