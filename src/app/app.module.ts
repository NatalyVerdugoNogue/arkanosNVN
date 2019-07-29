import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InitComponent } from './pages/init/init.component';
import { SidebarComponent } from './shares/sidebar/sidebar.component';
import { FormComponent } from './pages/dashboard/form/form.component';

// Rutas
import { APP_ROUTES } from './app.routes';

// Angular material
import { DemoMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';

// http
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './shares/weather/weather.component';


@NgModule({
  declarations: [AppComponent, DashboardComponent, InitComponent, SidebarComponent, FormComponent, WeatherComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTES,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  entryComponents: [DashboardComponent],
  providers: [],
  bootstrap: [AppComponent, DashboardComponent]
})
export class AppModule { }
