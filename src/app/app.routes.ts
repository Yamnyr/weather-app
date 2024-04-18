import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrevisionComponent } from './prevision/prevision.component';
import { MeteoComponent } from './meteo/meteo.component';

export  const  routes: Routes = [
    { path: '', redirectTo: '/meteo', pathMatch: 'full' },
    { path: 'prevision', component: PrevisionComponent },
    { path: 'meteo', component: MeteoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }