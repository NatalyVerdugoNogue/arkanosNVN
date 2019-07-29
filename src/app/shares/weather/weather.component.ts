import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  displayedColumns: string[] = ['title', 'data'];
  dataSource =
    [
      { title: 'T°', data: 'S/I' },
      { title: 'T° max', data: 'S/I' },
      { title: 'T° min', data: 'S/I' },
      { title: 'Humedad', data: 'S/I' }];
  city = 'S/I';

  constructor(private weatherService: WeatherService) { }



  ngOnInit() {
    this.weatherService.getWeather().subscribe(data => {
      this.dataSource = [
        { title: 'T°', data: (data.main.temp - 273).toFixed(1) + '°C' },
        { title: 'T° max', data: (data.main.temp_max - 273).toFixed(1) + '°C' },
        { title: 'T° min', data: (data.main.temp_min - 273).toFixed(1) + '°C' },
        { title: 'Humedad', data: data.main.humidity + '%' }];
      this.city = data.name;
    });
  }

}
