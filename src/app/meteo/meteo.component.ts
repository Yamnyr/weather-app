import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WeatherService} from "../weather.service";
import {RouterLink, RouterOutlet} from "@angular/router";
import {DecimalPipe, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'app-meteo',
    standalone: true,
    imports: [
        HttpClientModule,
        RouterOutlet,
        NgIf,
        DecimalPipe,
        DecimalPipe,
        NgIf,
        FormsModule,
        ReactiveFormsModule,
        NgOptimizedImage,
        RouterLink
    ],
    templateUrl: './meteo.component.html',
    styles: ``
})
export class MeteoComponent implements OnInit{

    searchCity: string = '';
    title = 'weather-app';
    userCoordinates: { latitude: number; longitude: number; } | undefined;
    weatherData: any; // Stocker les données météo
    checkoutForm = this.formBuilder.group({ city: '',  });

    constructor(private http: HttpClient,private formBuilder: FormBuilder) {

    }refreshPage(): void {
        window.location.reload();
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
