import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule , provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SociosComponent } from './socios/socios.component';
import { provideRouter } from '@angular/router';
import { AgregaSocioComponent } from './agrega-socio/agrega-socio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialIcon } from 'material-icons';
import { ActualizaSocioComponent } from './actualiza-socio/actualiza-socio.component';
import { HomeComponent } from './home/home.component';
import { BarcosComponent } from './barcos/barcos.component';
import { CrearBarcoComponent } from './barcos/crear-barco/crear-barco.component';
import { ActualizaBarcoComponent } from './barcos/actualiza-barco/actualiza-barco.component';
import { BarcoSocioComponent } from './barcos/barco-socio/barco-socio.component';
import { SalidasComponent } from './salidas/salidas.component';
import { CrearSalidaComponent } from './salidas/crear-salida/crear-salida.component';
import { ActualizarSalidaComponent } from './salidas/actualizar-salida/actualizar-salida.component';
import { SalidaFechaComponent } from './salidas/salida-fecha/salida-fecha.component';
import { SalidaBarcoComponent } from './salidas/salida-barco/salida-barco.component';

@NgModule({
  declarations: [
    AppComponent,
    SociosComponent,
    AgregaSocioComponent,
    ActualizaSocioComponent,
    HomeComponent,
    BarcosComponent,
    CrearBarcoComponent,
    ActualizaBarcoComponent,
    BarcoSocioComponent,
    SalidasComponent,
    CrearSalidaComponent,
    ActualizarSalidaComponent,
    SalidaFechaComponent,
    SalidaBarcoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
