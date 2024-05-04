import { Component, OnInit } from '@angular/core';
import { SociosService } from '../service/socios.service';
import { Socio } from '../crud/socio';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualiza-socio',
  templateUrl: './actualiza-socio.component.html',
  styleUrl: './actualiza-socio.component.css'
})

export class ActualizaSocioComponent implements OnInit {

  constructor(private sociosService: SociosService , private route: ActivatedRoute , private router: Router ) { }

  socioActualizado:Socio = { nombre: 'Nuevo nombre', telefono: 'Nuevo teléfono' };
  idsocio:number = 0;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.nuevosDatos(id);
      this.idsocio = id;
    });
  }


  nuevosDatos(id: number): void {
    this.sociosService.getSocio(id).subscribe(
      socio => {
        this.socioActualizado = socio;
      },
      error => {
        console.error('Error al obtener el socio:', error);
      }
    );
  }
  cambiarNombre(nuevoNombre: string) {
    this.socioActualizado.nombre = nuevoNombre;
  }

  cambiarTelefono(nuevoTelefono: string) {
    this.socioActualizado.telefono = nuevoTelefono;
  }

  actualizarSocio() {
    this.sociosService.getSocio(this.idsocio);
    this.sociosService.actualizarSocio(this.idsocio, this.socioActualizado).subscribe(
      () => {
        console.log('Socio actualizado con éxito');
      },
      error => {
        console.error('Error al actualizar socio:', error);
      }
    );
    this.router.navigateByUrl(`/socios`);
  }
}
