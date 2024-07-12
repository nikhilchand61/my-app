import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit {

  public employees:any = [
    {name: 'Nikhil', age: 27, dob: new Date('07/14/1996'), experience: 3, package: 11},
    {name: 'SaiTeja', age: 27, dob: new Date('09/04/1996'), experience: 2, package: 10},
    {name: 'Akhil', age: 28, dob: new Date('04/30/1995'), experience: 6, package: 12},
    {name: 'Hithesh', age: 27, dob: new Date('03/29/1997'), experience: 5, package: 9},
    {name: 'Irfan', age: 27, dob: new Date('08/24/1996'), experience: 3, package: 7},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
