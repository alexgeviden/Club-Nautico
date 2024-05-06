import { Component, OnInit } from '@angular/core';
import { SalidasService } from '../../service/salidas.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Salida } from '../../crud/salidas';

@Component({
  selector: 'app-crear-salida',
  templateUrl: './crear-salida.component.html',
  styleUrl: './crear-salida.component.css'
})
export class CrearSalidaComponent implements OnInit {
  data: any[] = [];
  datos: any[] = [];
  datosBarco: any[] = [];
  dataBarco: any[] = [];
  nuevaSalida: Salida = { fecha: new Date(), destino: '' , num_matricula: 0 , idpatron: 0 };

  constructor(private apiService: SalidasService , private sanitizer: DomSanitizer ){}

  ngOnInit(): void {
    this.llenarData();
    this.llenarDataBarco();
  }
  llenarData(){
    this.apiService.getDataPatron().subscribe(data => {
      this.data = data;
console.log(this.data)
    });
  }
  llenarDataBarco(){
    this.apiService.getDataBarco().subscribe(data => {

      if (Array.isArray(data)) {
        this.dataBarco = data[0];
      } else if (typeof data === 'object') {

       this.datosBarco = Object.values(data);
      }
      this.dataBarco = this.datosBarco[0];

    });
  }

  crearSalida() {
    console.log(this.nuevaSalida)
    this.apiService.createSalida(this.nuevaSalida)
      .subscribe(
        response => {
          console.log('salida creada exitosamente:', response);
          // Por ejemplo, puedes redirigir al usuario a otra página
        },
        error => {
          console.error('Error al crear salida:', error);
          // Aquí puedes manejar el error, como mostrar un mensaje al usuario
        }
      );
  }

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
