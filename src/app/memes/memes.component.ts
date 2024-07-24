import { Component, OnInit } from '@angular/core';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {

  public memes:any = [];

  constructor(private _memesService:MemesService) {
    _memesService.getMemes().subscribe(
      (data:any)=>{
        this.memes = data.data.memes;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    );
  }

  ngOnInit(): void {
  }

}
