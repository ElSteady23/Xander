//Aquí usamos el import para importar funciones que fueron exportadas de otros modulos
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

//Aquí le damos la conexión del html y scss
@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})

//Aquí damos la "conexión" para que se consuma la API y muestre los datos

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