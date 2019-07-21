import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers } from '@angular/Http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { Observable } from 'rxjs';
import { Assignment } from 'src/app/assignment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  option : RequestOptions;
  myHeaders : Headers;

  constructor(private _http: Http) { 
    this.myHeaders = new Headers();
    this.myHeaders.append('Access-Control-Origin','http://localhost:4200');
    let option = new RequestOptions({headers:this.myHeaders});
  }

  public getAssignmentList() : Observable<Assignment[]>{
    return this._http.get('http://localhost:8080/SpringRestfulWebServicesWithJSONExample/clients', 
    this.option).pipe(map((response: Response) => <Assignment[]>response.json()));
  }
}
