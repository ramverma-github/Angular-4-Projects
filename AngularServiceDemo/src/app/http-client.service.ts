import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers } from '@angular/http';
import { IClient } from 'src/app/iclient';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class HttpClientService {

  option : RequestOptions;
  myHeaders : Headers;

  constructor(private _http: Http) { 
    this.myHeaders = new Headers();
    this.myHeaders.append('Access-Control-Origin','http://localhost:4200');
    let option = new RequestOptions({headers:this.myHeaders});
  }

  getClient() : Observable<IClient[]>{
    return this._http.get('http://localhost:8080/SpringRestfulWebServicesWithJSONExample/clients', 
    this.option).pipe(map((response: Response) => <IClient[]>response.json()));
  }
}
