import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { players } from './players';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaydetServicesService {
  
  private _url:string="https://api.myjson.com/bins/qbg22";

  public loggedStatus: boolean;
  
  constructor(private http:HttpClient) { }

  getPlayers(): Observable<players[]>{
    return this.http.get<players[]>(this._url);
  }
}
