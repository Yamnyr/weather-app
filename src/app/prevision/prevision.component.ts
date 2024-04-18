import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ForecastService} from "../forecast.service";
import {RouterLink, RouterOutlet} from "@angular/router";
import {DecimalPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-prevision',
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
    RouterLink,
    NgForOf
  ],
  templateUrl: './prevision.component.html',
  styles: ``
})
export class PrevisionComponent implements OnInit{

  searchCity: string = '';
  title = 'weather-app';
  userCoordinates: { latitude: number; longitude: number; } | undefined;
  weatherData: any; // Stocker les données météo
  checkoutForm = this.formBuilder.group({ city: '',  });

  constructor(private http: HttpClient,private formBuilder: FormBuilder) {

  }refreshPage(): void {
    window.location.reload();
  }
  formatDate(dt_txt: string): string {
    const date = new Date(dt_txt);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${day}/${month} ${hours}:${minutes}`;
  }
  onSubmit() {
    // const city = this.checkoutForm.value.city
    console.log(this.checkoutForm.value.city);
    const ws = new ForecastService(this, this.http)
    ws.getForecastByCity(this.checkoutForm.value.city);
  }
  ngOnInit() {
    const ws = new ForecastService(this, this.http)
    ws.getUserLocationForecast();
  }


}
