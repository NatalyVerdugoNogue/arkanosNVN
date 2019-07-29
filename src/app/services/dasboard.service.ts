import { Injectable } from '@angular/core';
import { IDashboard } from '../pages/dashboard/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DasboardService {

  dataDashboard: IDashboard;

  constructor() { }

  postDataDashboard(data) {
    this.dataDashboard = data;
  }

  getDataDashboard() {
    return this.dataDashboard;
  }

}
