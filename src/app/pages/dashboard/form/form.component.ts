import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DasboardService } from '../../../services/dasboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private fb: FormBuilder, private dashboardService: DasboardService, public router: Router) { }

  minDate = new Date();

  dataForm = this.fb.group({
    newBuy: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    increBuy: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    newUser: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    newVisit: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    date: ['', Validators.required],
  });

  getError(data) {
    return this.dataForm.get(data).hasError('required') ? 'Este campo es requerido' :
      this.dataForm.get(data).hasError('pattern') ? 'Campo no válido, debe ser un número' : '';
  }

  getErrorDate() {
    return this.dataForm.get('date').hasError('required') ? 'Este campo es requerido' : '';
  }

  onSubmit() {
    this.dashboardService.postDataDashboard(this.dataForm.value);
    this.router.navigate(['/dashboard']);
  }

}
