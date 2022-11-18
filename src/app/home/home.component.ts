import { Component } from '@angular/core';
import { HabitacionesService } from '../services/servicioHabitaciones/habitaciones.service';
import { ReservasService } from '../services/servicioReservas/reservas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  public habitaciones:any[] = []
  public reservas:any[] = []

  constructor( public servicionHabitacion:HabitacionesService, public servicioReserva:ReservasService) { 

    servicioReserva.consultarReservas()
    .subscribe(respuesta =>{
      console.log(respuesta.datos)
      this.reservas = respuesta.datos
    })

   servicionHabitacion.consultarHabitaciones()
    .subscribe(respuesta =>{
      console.log(respuesta.datos)
      this.habitaciones = respuesta.datos
    })

    
  }

  ngOnInit(): void {
  }

}
