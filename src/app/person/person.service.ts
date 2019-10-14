import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Person} from '../person'
import {TrasactionInfo} from '../trasactionInfo'
import { Observable } from 'rxjs';

@Injectable() 

export class PersonInfo {
 private _baseUrl:string = "http://localhost:3000/"

  constructor(private http: HttpClient) {
  }

  getPerson(id): Observable<TrasactionInfo[]>{
    return this.http.post<TrasactionInfo[]>(`${this._baseUrl}card/query`, {"person": id})
  }

  addNewCard(id, card){
    return this.http.post(`${this._baseUrl}card/add`, {
      "person_id": id,
      "card_number": card
    })
  }

  getPersonInfo(id): Observable<Person[]>{
    return this.http.post<Person[]>(`${this._baseUrl}person/get`, {"id": id})
  }
  
}
