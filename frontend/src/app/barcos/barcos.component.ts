import { Component } from '@angular/core';
import { BarcosService } from '../service/barcos.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barcos',
  templateUrl: './barcos.component.html',
  styleUrl: './barcos.component.css'
})
export class BarcosComponent {

  data: any[] = [];
  datos: any[] = [];

  constructor(private apiService: BarcosService , private sanitizer: DomSanitizer , private router: Router ){}

  ngOnInit(): void {
    this.llenarData();
  }
  enviarSalidaBarco(idsalida: number) {
    this.router.navigateByUrl(`/salidaBarco/${idsalida}`);
  }
  llenarData(){
    this.apiService.getData().subscribe(data => {

      if (Array.isArray(data)) {
        this.data = data[0];
      } else if (typeof data === 'object') {

       this.datos = Object.values(data);
      }
      this.data = this.datos[0];

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

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
