import { Component, OnInit } from '@angular/core';
import { TopReatedService } from '../top-reated.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent implements OnInit {
  personList:any[]=[];
imgBaseUrl:string='https://image.tmdb.org/t/p/original/';
constructor(private _TopReatedSrevice:TopReatedService){}
  getTrendingPerson(){
    this._TopReatedSrevice. getTrendingitemsPerson('person').subscribe((response)=>{
      this.personList=response.results
     // console.log(response)
    })
}
ngOnInit(): void {
  this.getTrendingPerson()
}

}
