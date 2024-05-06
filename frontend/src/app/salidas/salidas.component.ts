import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SalidasService } from '../service/salidas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.component.html',
  styleUrl: './salidas.component.css'
})
export class SalidasComponent {

  data: any[] = [];
  datos: any[] = [];

  constructor(private apiService: SalidasService , private sanitizer: DomSanitizer , private router: Router ){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe(data => {

      if (Array.isArray(data)) {
        this.data = data;
      } else if (typeof data === 'object') {

       this.datos = data;
      }
      console.log(this.data)

    });
  }
  formatFecha(fecha: string): string {
    // Crear un objeto Date a partir de la cadena de fecha
    const date = new Date(fecha);

    // Formatear la fecha y hora en el formato deseado
    return date.toLocaleString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
  }


  enviarSalida(idsalida: number) {
    this.router.navigateByUrl(`/actualizaSalida/${idsalida}`);
  }
  eliminarSalida(idsalida: number) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este Salida con matricula :' + idsalida + ' ?');

    if (confirmacion) {
      console.log('Se ha codigido este ID del HTML : ' + idsalida);
      this.apiService.deleteSalida(idsalida).subscribe(
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
