
import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { DecimalPipe, NgIf } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { WeatherService } from './weather.service';

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

  constructor(private http: HttpClient) { } // Injectez HttpClient ici

  ngOnInit() {
    const ws = new WeatherService(this, this.http)
    ws.getUserLocation();
  }
}


