import { Component } from '@angular/core';
import {HomeService} from './home.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  public people= []

  constructor(private _personservice: HomeService) {
    this._personservice.getPeople()
      .subscribe( data =>{
        this.people = data
        console.log(this.people)
    });}

  ngOnInit() {
    
  }

}
