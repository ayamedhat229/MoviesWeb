import { Component, OnInit } from '@angular/core';
import { TopReatedService } from '../top-reated.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.scss'
})
export class TvComponent implements OnInit {
movieTvList:any[]=[];
imgBaseUrl:string='https://image.tmdb.org/t/p/original/';

constructor(private _TopReatedSrevice:TopReatedService){}
getTopRatedMoviesTv(){
  this._TopReatedSrevice.getTrendingItemsTv('tv').subscribe((response)=>{
    this.movieTvList=response.results
   console.log(response)
  })
}
ngOnInit(): void {
  this.getTopRatedMoviesTv();
}
}
