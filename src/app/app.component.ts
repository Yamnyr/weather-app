
import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule

import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {DecimalPipe, NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterOutlet,
    NgIf,
    DecimalPipe,
    DecimalPipe,
    NgIf
  ],
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  userCoordinates: { latitude: number; longitude: number; } | undefined;
  weatherData: any; // Stocker les données météo

  constructor(private http: HttpClient) {} // Injectez HttpClient ici

  ngOnInit() {
    this.getUserLocation();
  }

  getUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.userCoordinates = {
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
    if (this.userCoordinates) {
      const { latitude, longitude } = this.userCoordinates; // Récupérez latitude et longitude de userCoordinates
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=48.9579&lon=2.8794&appid=${apiKey}`;

      this.http.get(apiUrl).subscribe((data) => {
        this.weatherData = data;
        console.log("Weather Data:", this.weatherData);
      });
    }
  }
}

