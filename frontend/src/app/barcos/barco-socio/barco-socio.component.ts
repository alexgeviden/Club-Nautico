import { Component } from '@angular/core';
import { BarcosService } from '../../service/barcos.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-barco-socio',
  templateUrl: './barco-socio.component.html',
  styleUrl: './barco-socio.component.css'
})
export class BarcoSocioComponent {
  data: any[] = [];
  dataSocio: any[] = [];
  datos: any[] = [];
idsocio: number = 0;
  constructor(private apiService: BarcosService , private sanitizer: DomSanitizer , private router: Router , private route: ActivatedRoute ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.idsocio = id;
    });
    this.llenarData();
  }

  llenarData(){
    this.apiService.getBarcoSocio(this.idsocio).subscribe(data => {

      if (Array.isArray(data)) {
        this.data = data[0];
      } else if (typeof data === 'object') {

       this.datos = Object.values(data);
      }
      this.data = this.datos[0];
      this.dataSocio = [this.datos[1]];


console.log(this.data)
console.log(this.dataSocio)
    });
  }
  enviarBarco(num_matricula: number) {
    this.router.navigateByUrl(`/actualizaBarco/${num_matricula}`);
  }
  eliminarBarco(num_matricula: number) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este barco con matricula :' + num_matricula + ' ?');

    if (confirmacion) {
      console.log('Se ha codigido este ID del HTML : ' + num_matricula);
      this.apiService.deleteBarco(num_matricula).subscribe(
        () => {
          console.log('Socio eliminado con éxito');

          window.location.reload();
        },
        error => {
          console.error('Error al eliminar socio:', error);
        }
      );
    }
  }

}
