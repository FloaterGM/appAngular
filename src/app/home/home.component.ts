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
      console.log(respuesta)
      this.reservas = respuesta
    })

   servicionHabitacion.consultarHabitaciones()
    .subscribe(respuesta =>{
      console.log(respuesta)
      this.habitaciones = respuesta
    })

    
  }

  ngOnInit(): void {
  }

}
