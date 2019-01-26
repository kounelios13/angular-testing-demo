import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListModule } from './list/list.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';
import {CardModule} from 'primeng/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from './menubar/menubar.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MenubarComponent} from './menubar/menubar.component';
import {ButtonModule, ColorPickerModule, InputTextModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ListModule,
    CardModule,
    FormsModule,
    HttpClientModule,
    MenubarModule,
    ColorPickerModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
