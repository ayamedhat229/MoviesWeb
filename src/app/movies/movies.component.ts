import { Component, OnInit } from '@angular/core';
import { TopReatedService } from '../top-reated.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {
  movieList:any[]=[];
  imgBaseUrl:string='https://image.tmdb.org/t/p/original/';
  term:string='';
constructor(private _TopReatedSrevice:TopReatedService){}
getTopRatedMovies(){
  this._TopReatedSrevice.getTrendingitemsMovies('movie').subscribe((response)=>{
    this.movieList=response.results
   // console.log(response)
  })
}
ngOnInit(): void {
  this.getTopRatedMovies()
}
}
