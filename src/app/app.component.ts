
import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { DecimalPipe, NgIf } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { WeatherService } from './weather.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormBuilder } from '@angular/forms';

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
    NgIf,
    FormsModule,
    ReactiveFormsModule
  ],
  // styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  searchCity: string = '';
  title = 'weather-app';
  userCoordinates: { latitude: number; longitude: number; } | undefined;
  weatherData: any; // Stocker les données météo
  checkoutForm = this.formBuilder.group({ city: '',  });

  constructor(private http: HttpClient,private formBuilder: FormBuilder) {

  }
  onSubmit() {
    // const city = this.checkoutForm.value.city
    console.log(this.checkoutForm.value.city);
    const ws = new WeatherService(this, this.http)
    ws.getWeatherByCity(this.checkoutForm.value.city);
  }
  ngOnInit() {
    const ws = new WeatherService(this, this.http)
    ws.getUserLocation();
  }
}


