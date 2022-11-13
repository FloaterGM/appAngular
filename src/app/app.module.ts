import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormReservaComponent } from './form-reserva/form-reserva.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { HttpClient, HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    FormReservaComponent,
    HabitacionesComponent,
    DescripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
