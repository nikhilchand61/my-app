import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  public vehicles:any = [];
  public term:string = "";
  public column:string = "";
  public order:string = "";
  public limit:number = 0;
  public pageNo:number = 0;

  constructor(private _vehicleService:VehicleService) {

    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    );

  }

  ngOnInit(): void {
  }
  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    );
  }
  sort(){
    this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    );
  }
  page(){
    this._vehicleService.getPagedVehicles(this.limit,this.pageNo).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    );
  }
  delete(id:string){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("deleted successfully!!!!!!");
        location.reload();
      },
      (err:any)=>{
        alert("deletion failed");
      }
    );
  }
}
