import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  vehicles: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getVehicles().subscribe(data => {
      console.log(data); // Puedes mostrar los datos en la consola o procesarlos
      this.vehicles = data;
    });
  }
}