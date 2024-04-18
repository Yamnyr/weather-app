// weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  user: MeteoComponent;
  client: HttpClient;

  constructor(userInfo: MeteoComponent, clientInfo: HttpClient) {
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
      this.getWeatherByCity("Paris");
      console.log("No support for geolocation");
    }
    this.getWeatherByCity("Paris");
  }
  getWeatherData(): void {
    const apiKey = 'b050d0b64ae3ca445a124d163582ba38';
    if (this.user.userCoordinates) {
      const { latitude, longitude } = this.user.userCoordinates; // Récupérez latitude et longitude de userCoordinates
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=fr`;

      this.client.get(apiUrl).subscribe((data) => {
        this.user.weatherData = data;
        console.log("Weather Data:", this.user.weatherData);
      });
    }
  }
  getWeatherByCity(city: any): void {
    const apiKey = 'b050d0b64ae3ca445a124d163582ba38';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=fr`;
    this.client.get(apiUrl).subscribe((data) => {
      this.user.weatherData = data;
      console.log("Weather Data:", this.user.weatherData);
    });
  }
}
