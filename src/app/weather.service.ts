// weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  user: AppComponent;
  client: HttpClient;

  constructor(userInfo: AppComponent, clientInfo: HttpClient) {
    this.user = userInfo
    this.client = clientInfo
  }

  getUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.user.userCoordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        this.getWeatherData();
      });
    } else {
      console.log("No support for geolocation");
    }
  }
  getWeatherData(): void {
    const apiKey = 'b050d0b64ae3ca445a124d163582ba38';
    if (this.user.userCoordinates) {
      const { latitude, longitude } = this.user.userCoordinates; // Récupérez latitude et longitude de userCoordinates
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=48.9579&lon=2.8794&appid=${apiKey}&lang=fr`;

      this.client.get(apiUrl).subscribe((data) => {
        this.user.weatherData = data;
        console.log("Weather Data:", this.user.weatherData);
      });
    }
  }
}
