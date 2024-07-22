import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GooglePlacesService {
  private apiUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
  private apiKey = 'YOUR_GOOGLE_PLACES_API_KEY'; // Replace with your Google Places API key

  constructor(private http: HttpClient) {}

  getPopularPlaces(location: string, radius: number = 5000): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?location=${location}&radius=${radius}&key=${this.apiKey}`);
  }}
