//Se crean import para importar funciones
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Se exporta la clase para darle la dirección de la api
export class ApiService {
  private apiUrl = 'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records/';

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
