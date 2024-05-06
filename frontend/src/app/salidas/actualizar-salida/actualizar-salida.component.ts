import { Component } from '@angular/core';
import { SalidasService } from '../../service/salidas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Salida } from '../../crud/salidas';

@Component({
  selector: 'app-actualizar-salida',
  templateUrl: './actualizar-salida.component.html',
  styleUrl: './actualizar-salida.component.css'
})
export class ActualizarSalidaComponent {
  constructor(private apiService: SalidasService , private route: ActivatedRoute , private router: Router ) { }

  salidaActualizada:Salida =  { fecha: new Date(), destino: '' , num_matricula: 0 , idpatron: 0 };
  num_matricula:number = 0;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.nuevosDatos(id);
      this.num_matricula = id;
    });
  }


  nuevosDatos(id: number): void {
    this.apiService.getSalida(id).subscribe(
      salida => {
        this.salidaActualizada = salida;
      },
      error => {
        console.error('Error al obtener el salida:', error);
      }
    );
  }

  actualizarSalida() {
    this.apiService.getSalida(this.num_matricula);
    this.apiService.actualizarSalida(this.num_matricula, this.salidaActualizada).subscribe(
      () => {
        console.log('Barco actualizado con éxito');
      },
      error => {
        console.error('Error al actualizar socio:', error);
      }
    );
    this.router.navigateByUrl(`/salidas`);
  }
}
