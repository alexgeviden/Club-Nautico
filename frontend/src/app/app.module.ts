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

@NgModule({
  declarations: [
    AppComponent,
    SociosComponent,
    AgregaSocioComponent,
    ActualizaSocioComponent,
    HomeComponent,

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
