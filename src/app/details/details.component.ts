import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopReatedService } from '../top-reated.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  currentId:number=0;
  currentMediaType:string='';
  imgBaseUrl:string='https://image.tmdb.org/t/p/original/';
  itemDetails:any={};
  constructor(private _ActivatedRoute:ActivatedRoute, private _TopReatedServices:TopReatedService){
  this.currentId=_ActivatedRoute.snapshot.params['id'];
  this.currentMediaType=_ActivatedRoute.snapshot.params['mediaType']
  }
  getDetailsItem(){
    this._TopReatedServices.getTrendingMovieDetails(this.currentId,this.currentMediaType).subscribe((response)=>{
      this.itemDetails=response;
     // console.log(response)
    })
  }
    ngOnInit(): void {
      this.getDetailsItem()
    }
  }

  


