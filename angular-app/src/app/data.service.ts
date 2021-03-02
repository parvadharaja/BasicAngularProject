import { Injectable } from '@angular/core';
import {Subject,Observable} from'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _loggedInStatus= new Subject<boolean>();
  loggedInStatus$=this._loggedInStatus.asObservable();

  constructor(private http: HttpClient) { }

  sendStatus(status:boolean){
    this._loggedInStatus.next(status)
  }
  public getbackendData() : Observable<object>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
