import { Route } from "@angular/router";
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';

export const routes:Route[] = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'devices',component:AppComponent},
    {path:'cars',component:CarsComponent},
    {path:'admins',component:AppComponent},
];