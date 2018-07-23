import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  people : Object;
  person : Object;

  constructor(private _http: HttpService){}

  ngOnInit(){
    // this.getPeopleFromService()
  }

  getPeopleFromService(){
    let ob = this._http.getPeople();
    ob.subscribe(data => {
      console.log(data);
      this.people = data['people'];
    });
  }

  getPersonFromService(id){
    let ob = this._http.getPerson(id);
    ob.subscribe(data => {
      console.log(data);
      this.person = data['person'];
    });
  }
}
