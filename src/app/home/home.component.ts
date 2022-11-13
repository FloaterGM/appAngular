import { Component } from '@angular/core';
import { HabitacionesService } from '../services/habitaciones.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  public habitaciones:any[] = []

  constructor( public servicionHabitacion:HabitacionesService) { 
   servicionHabitacion.consultarHabitaciones()
    .subscribe(respuesta =>{
      console.log(respuesta)
      this.habitaciones = respuesta
    })
  }

  ngOnInit(): void {
  }

}
