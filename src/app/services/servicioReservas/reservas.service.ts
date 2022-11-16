import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(public peticion:HttpClient) {}
  
  consultarReservas():Observable<any>{
     let uri = "http://apicvh.herokuapp.com/hotelesCris/reservas"
     return this.peticion.get(uri)
 
  }
} 