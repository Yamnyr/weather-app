import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule pour gérer les requêtes HTTP

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule // Ajoutez HttpClientModule ici pour que HttpClient soit disponible dans toute l'application
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
