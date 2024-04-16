// weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    constructor(private http: HttpClient) {}

    getWeatherData(latitude: number, longitude: number) {
        const apiKey = 'b050d0b64ae3ca445a124d163582ba38';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

        return this.http.get(apiUrl);
    }
}
