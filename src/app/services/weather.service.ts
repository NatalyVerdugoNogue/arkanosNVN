import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  // Data del clima en stgo
  getWeather(): Observable<any> {
    const urlWeather = `http://api.openweathermap.org/data/2.5/weather?id=3871336&appid=${environment.apiKey}`;
    return this.http.get(urlWeather);
  }
}
