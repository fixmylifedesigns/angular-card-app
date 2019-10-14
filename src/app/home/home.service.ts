import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Person} from '../person'
import { Observable } from 'rxjs';

@Injectable() 

export class HomeService {
 private _baseUrl: string = "http://localhost:3000/"

  constructor(private http: HttpClient) {
  }

  getPeople(): Observable<Person[]>{
    return this.http.post<Person[]>(`server/person/list`, {})
  }
  
}
