import { Component, OnInit } from '@angular/core';
import { DasboardService } from '../../services/dasboard.service';
import { IDashboard } from './dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataDashboard: IDashboard;

  cards = [];

  constructor(private dasboardService: DasboardService) { }

  ngOnInit(): void {
    this.dataDashboard = this.dasboardService.getDataDashboard();
    if (this.dataDashboard === undefined) {
      this.cards = [
        { 'data': 'S/I', 'title': 'Nuevas Compras', 'color': '#00C0EF' },
        { 'data': 'S/I', 'title': 'Incremento de Compras', 'color': '#00A65A' },
        { 'data': 'S/I', 'title': 'Nuevos Usuarios', 'color': '#F39C12' },
        { 'data': 'S/I', 'title': 'Nuevas Visitas', 'color': '#DD4B39' }];
    } else {
      this.cards = [
        { 'data': this.dataDashboard.newBuy, 'title': 'Nuevas Compras', 'color': '#00C0EF' },
        { 'data': this.dataDashboard.increBuy + ' %', 'title': 'Incremento de Compras', 'color': '#00A65A' },
        { 'data': this.dataDashboard.newUser, 'title': 'Nuevos Usuarios', 'color': '#F39C12' },
        { 'data': this.dataDashboard.newVisit, 'title': 'Nuevas Visitas', 'color': '#DD4B39' }];
    }
  }

}
