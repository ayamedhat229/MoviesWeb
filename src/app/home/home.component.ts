import { Component, OnInit } from '@angular/core';
import { TopReatedService } from '../top-reated.service';
import { response } from 'express';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit{
  movie:any[]=[];
  imgBaseUrl:string='https://image.tmdb.org/t/p/original/';
 // imgHome='/src/assets/images/download.jpeg';
constructor(private _TopReatedSrevice:TopReatedService){}
  getTopRatedMovies(){
    this._TopReatedSrevice.getMovieNowPlaying().subscribe((response)=>{
      this.movie=response.results
     console.log(response)
    })
  }
  ngOnInit(): void {
    this.getTopRatedMovies();
  }
  }
  



