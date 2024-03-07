import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopReatedService {

  constructor(private http:HttpClient) {}
  getMovieNowPlaying():Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=16b2bb1c4752d56447ac1e1853f404b1`)
  }
  getTrendingItemsTv(mediaType:string):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=16b2bb1c4752d56447ac1e1853f404b1`)
  }
  getTrendingitemsMovies(mediaType:string):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=16b2bb1c4752d56447ac1e1853f404b1`)
  }
  getTrendingitemsPerson(mediaType:string):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=16b2bb1c4752d56447ac1e1853f404b1`)
  }
  getTrendingMovieDetails(id:number,mediaType:string):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=16b2bb1c4752d56447ac1e1853f404b1`)
  }
}
