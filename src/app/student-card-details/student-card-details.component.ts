import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentCardService } from '../student-card.service';

@Component({
  selector: 'app-student-card-details',
  templateUrl: './student-card-details.component.html',
  styleUrls: ['./student-card-details.component.css']
})
export class StudentCardDetailsComponent implements OnInit {

  public student:any = {};

  constructor(private _activatedRoute:ActivatedRoute, private _studentCardService:StudentCardService) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
        _studentCardService.getStudentDetails(data.id).subscribe(
          (data:any)=>{
            this.student = data;
          },
          (err:any)=>{
            alert("Student Details not found!!!");
          }
        )
      }
    )
  }

  ngOnInit(): void {
  }

}
