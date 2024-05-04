import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SociosService } from '../service/socios.service';
import { Socio } from '../crud/socio';

@Component({
  selector: 'app-agrega-socio',
  templateUrl: './agrega-socio.component.html',
  styleUrl: './agrega-socio.component.css'
})
export class AgregaSocioComponent {

  nuevoSocio: Socio = { nombre: '', telefono: '' }; // Inicialización con valores predeterminados

  constructor(private apiService: SociosService , private sanitizer: DomSanitizer ){}

  ngOnInit(): void {

  }

  crearSocio() {
    console.log('Has llamado a crear socio en el formulario')
    this.apiService.createSocio(this.nuevoSocio)
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
