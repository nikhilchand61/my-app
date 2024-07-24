import { Component, OnInit } from '@angular/core';
import { StudentCardService } from '../student-card.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {

  public students:any = [];

  constructor(private _studentCardService:StudentCardService) {
    _studentCardService.getStudents().subscribe(
      (data:any)=>{
        this.students = data;
        console.log(this.students);
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  ngOnInit(): void {
  }

}
