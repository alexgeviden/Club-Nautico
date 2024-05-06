import { Component } from '@angular/core';
import { Barco } from '../../crud/barco';
import { BarcosService } from '../../service/barcos.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-crear-barco',
  templateUrl: './crear-barco.component.html',
  styleUrl: './crear-barco.component.css'
})
export class CrearBarcoComponent {
  data: any[] = [];
  datos: any[] = [];
  nuevoBarco: Barco = { num_matricula: 0, nombre: '' , amarre: 0 , idsocio: 0 };

  constructor(private apiService: BarcosService , private sanitizer: DomSanitizer ){}

  ngOnInit(): void {
    this.llenarData();
  }
  llenarData(){
    this.apiService.getDataSocios().subscribe(data => {

      if (Array.isArray(data)) {
        this.data = data[0];
      } else if (typeof data === 'object') {

       this.datos = Object.values(data);
      }
      this.data = this.datos[0];

    });
  }
  crearBarco() {
    console.log(this.nuevoBarco)
    this.apiService.createBarco(this.nuevoBarco)
      .subscribe(
        response => {
          console.log('Socio creado exitosamente:', response);
          // Por ejemplo, puedes redirigir al usuario a otra página
        },
        error => {
          console.error('Error al crear socio:', error);
          // Aquí puedes manejar el error, como mostrar un mensaje al usuario
        }
      );
  }

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
