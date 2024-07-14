import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  private apiUrl= '';
  private clientId=''

  constructor( private http:HttpClient){} 
  
  
    getPopularPlaces(query:String='popular places'):Observable<any>{
      return this.http.get<any>(`${this.apiUrl}?query=${query}& client_id=${this.clientId}`)
    }
  
}
