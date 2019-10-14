import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {PersonInfo} from './person.service'
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  public customer = {}
  public customerInfo = {}
  public person = []
  public id = null
  public card = ""


  constructor(private _personservice: PersonInfo, private router: ActivatedRoute, private http: HttpClient) {
    this.router.params.subscribe(params =>{
      const id:number = parseInt(params.id)
      this.id = id
      this._personservice.getPerson(id)
      .subscribe(data =>{
        this.person = data
        this.customer = data[0]
        // console.log(this.id)
    });
    this._personservice.getPersonInfo(id)
    .subscribe(data =>{
      this.customerInfo = data
      console.log(this.customerInfo)
  });
    })
   }

addCard(event){
  event.preventDefault();
  console.log(this.card)
  this._personservice.addNewCard(parseInt(this.id), this.card )
  .subscribe(data =>{
    this.person.push(data)
    this.card = ""
    console.log(data)
});
}


}
