import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getPeople(){
    console.log('service');
    return this._http.get('/people');
  }

  getPerson(id){
    console.log('service');
    return this._http.get(`/people/${id}`);
  }
}
