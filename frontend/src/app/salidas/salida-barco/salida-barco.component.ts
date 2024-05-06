import { Component, OnInit } from '@angular/core';
import { SalidasService } from '../../service/salidas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SafeHtml , DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-salida-barco',
  templateUrl: './salida-barco.component.html',
  styleUrl: './salida-barco.component.css'
})
export class SalidaBarcoComponent implements OnInit {

  constructor(private apiService: SalidasService , private route: ActivatedRoute , private router: Router , private sanitizer: DomSanitizer) {}
  mostrarInput: boolean = false;
  num_matricula: number = 0;
  data: any[] = [];
  datos: any[] = [];
  fecha!: Date;

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.num_matricula = id;
    });

    this.llenarData();
  }

  formatFecha(fecha: string): string {
    // Crear un objeto Date a partir de la cadena de fecha
    const date = new Date(fecha);

    // Formatear la fecha y hora en el formato deseado
    return date.toLocaleString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
  }
  llenarData(){
    this.apiService.getSalidaBarco(this.num_matricula).subscribe(data => {

      if (Array.isArray(data)) {
        this.data = data;
      } else if (typeof data === 'object') {

       this.datos = data;
      }
      console.log(this.data)

    });
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
  toggleInput() {
    this.mostrarInput = !this.mostrarInput;
  }
  filtrarDatos(fecha: Date) {
    if (fecha) {
      this.data = this.data.filter(item => item.fecha.includes(fecha));
    } else {
      this.llenarData();
    }
  }

  reset() {
    this.llenarData();
  }
  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
