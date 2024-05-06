import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SociosComponent } from './socios/socios.component';
import { AgregaSocioComponent } from './agrega-socio/agrega-socio.component';
import { ActualizaSocioComponent } from './actualiza-socio/actualiza-socio.component';
import { HomeComponent } from './home/home.component';
import { CrearBarcoComponent } from './barcos/crear-barco/crear-barco.component';
import { BarcosComponent } from './barcos/barcos.component';
import { ActualizaBarcoComponent } from './barcos/actualiza-barco/actualiza-barco.component';
import { BarcoSocioComponent } from './barcos/barco-socio/barco-socio.component';
import { SalidasComponent } from './salidas/salidas.component';
import { CrearSalidaComponent } from './salidas/crear-salida/crear-salida.component';
import { ActualizarSalidaComponent } from './salidas/actualizar-salida/actualizar-salida.component';
import { SalidaBarcoComponent } from './salidas/salida-barco/salida-barco.component';


const routes: Routes = [
  // Ruta de redirección
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'socios' , component: SociosComponent},
  {path: 'nuevosocio' , component: AgregaSocioComponent},
  {path: 'nuevobarco' , component: CrearBarcoComponent},
  {path: 'actualizaSocio/:id' , component: ActualizaSocioComponent},
  {path: 'actualizaBarco/:id' , component: ActualizaBarcoComponent},
  {path: 'actualizaSalida/:id' , component: ActualizarSalidaComponent},
  {path: 'socios/:id/barcos' , component: BarcoSocioComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'barcos' , component: BarcosComponent},
  {path: 'salidas' , component: SalidasComponent},
  {path: 'nuevaSalida' , component: CrearSalidaComponent},
  {path: 'salidaBarco/:id' , component: SalidaBarcoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
