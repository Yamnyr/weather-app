import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MeteoComponent } from './meteo/meteo.component';

export  const  routes: Routes = [
    { path: '', redirectTo: '/meteo', pathMatch: 'full' },
    // { path: 'meteo', component: MeteoComponent },
    // { path: 'products/:id', component: DetailProductComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }