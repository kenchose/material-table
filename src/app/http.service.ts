import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './table.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private serviceUrl = "https://jsonplaceholder.typicode.com/users"

  constructor(private _http:HttpClient) { }

  getUser():Observable<User[]> {
    return this._http.get<User[]>(this.serviceUrl);
  }

}
