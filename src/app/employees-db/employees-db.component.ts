import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-db',
  templateUrl: './employees-db.component.html',
  styleUrls: ['./employees-db.component.css']
})
export class EmployeesDbComponent implements OnInit {

  public emp_name:string = "";

  public newEmployee = {
    emp_id: 0,
    emp_name: '',
    role: '',
    j_date: '',
    phone: 0,
    email: '',
    dob: '',
    gender: '',
    address: ''
  };

  public employees: any[] = [
    {emp_id: 1234, emp_name: 'nikhil chand', role: 'ui developer',j_date: new Date('9/1/2024'), phone: 9700622315, email: 'n@gmail.com', dob: new Date('7/14/1996'), gender: 'male', address: 'd.no: 202, SLN, myp, hyd'},
    {emp_id: 1564, emp_name: 'akhil', role: 'manager',j_date: new Date('1/1/2017'), phone: 5564551535, email: 'a@gmail.com', dob: new Date('4/30/1995'), gender: 'male', address: 'd.no: 303, SCR, nzmpt, hyd'},
    {emp_id: 1878, emp_name: 'sai teja', role: 'ui developer',j_date: new Date('8/31/2024'), phone: 4545787989, email: 't@gmail.com', dob: new Date('4/9/1996'), gender: 'male', address: 'd.no: g4, ssn, prgngr, hyd'},
    {emp_id: 5154, emp_name: 'hithesh', role: 'sr. hr & bp',j_date: new Date('4/1/2020'), phone: 8799821321, email: 'h@gmail.com', dob: new Date('3/29/1997'), gender: 'male', address: 'd.no: 501, gsm, tngo2, hyd'},
    {emp_id: 4922, emp_name: 'irfan', role: 'devops eng',j_date: new Date('5/4/2020'), phone: 1951451456, email: 'i@gmail.com', dob: new Date('4/28/1996'), gender: 'male', address: 'd.no: 308, ah, tngo1, hyd'},
    {emp_id: 4531, emp_name: 'mani krishna', role: 'bussiness analyst',j_date: new Date('9/3/2019'), phone: 9888556611, email: 'm@gmail.com', dob: new Date('4/5/1996'), gender: 'male', address: 'd.no: 308, ah, tngo1, hyd'},
    {emp_id: 3543, emp_name: 'rahul', role: 'cyber security',j_date: new Date('2/13/2024'), phone: 8844661133, email: 'r@gmail.com', dob: new Date('2/11/1995'), gender: 'male', address: 'd.no: 111, nxl, kkp, hyd'},
    {emp_id: 2112, emp_name: 'narendar', role: 'sales manager',j_date: new Date('4/6/2022'), phone: 7878788989, email: 'na@gmail.com', dob: new Date('08/15/1997'), gender: 'male', address: 'd.no: 104, apt, nzmpt, hyd'},
    {emp_id: 8875, emp_name: 'kalyan', role: 'qa analyst',j_date: new Date('7/2/2023'), phone: 8882225544, email: 'k@gmail.com', dob: new Date('6/17/1997'), gender: 'male', address: 'd.no: 12, bgnr, knr'},
    {emp_id: 6264, emp_name: 'shiva', role: 'backend dev',j_date: new Date('10/6/2018'), phone: 7775556611, email: 's@gmail.com', dob: new Date('4/08/1996'), gender: 'male', address: 'd.no: 35, pvl, bgnr, hyd'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    this.employees.push({...this.newEmployee});
    this.newEmployee = {
      emp_id: 0,
      emp_name: '',
      role: '',
      j_date: '',
      phone: 0,
      email: '',
      dob: '',
      gender: '',
      address: ''
    };
  }
  del(i:number){
    this.employees.splice(i,1);
  }
  search(emp_name:string){
    this.employees = this.employees.filter((emp)=>emp.emp_name.includes(emp_name));
  }
  sortEmp(){
    this.employees.sort((a:any,b:any)=>a.emp_id-b.emp_id);
  }
  sortJdate(){
    this.employees.sort((a:any,b:any)=>a.j_date-b.j_date);
  }
  sortDob(){
    this.employees.sort((a:any,b:any)=>a.dob-b.dob);
  }
}
