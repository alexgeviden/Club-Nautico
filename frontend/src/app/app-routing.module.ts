import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SociosComponent } from './socios/socios.component';
import { AgregaSocioComponent } from './agrega-socio/agrega-socio.component';
import { ActualizaSocioComponent } from './actualiza-socio/actualiza-socio.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  // Ruta de redirección
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'socios' , component: SociosComponent},
  {path: 'nuevosocio' , component: AgregaSocioComponent},
  {path: 'actualizaSocio/:id' , component: ActualizaSocioComponent},
  {path: 'home' , component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
