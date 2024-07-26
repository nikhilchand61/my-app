import { Component, OnInit } from '@angular/core';
import { StudentCardService } from '../student-card.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {

  public students:any = [];
  public term:string = "";
  public sortColumn:string = "";
  public sortOrder:string = "";
  public limit:number = 0;
  public pageNo:number = 0;
  // public id:string = "";

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
  filter(){
    this._studentCardService.getFilteredStudents(this.term).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
  sort(){
    this._studentCardService.getSortedStudents(this.sortColumn,this.sortOrder).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
  page(){
    this._studentCardService.getpagedStudents(this.limit,this.pageNo).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
  delete(id:string){
    this._studentCardService.deleteStudent(id).subscribe(
      (data:any)=>{
        alert("Deleted Successfully!!!");
        location.reload();
      },
      (err:any)=>{
        alert("Deletion failed!!!");
      }
    )
  }
}
