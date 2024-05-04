import { Component, OnInit } from '@angular/core';
import { SociosService } from '../service/socios.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css'] // Corrected property name
})
export class SociosComponent implements OnInit {

  data: any[] = [];
  datos: any[] = [];

  constructor(private apiService: SociosService , private sanitizer: DomSanitizer , private router: Router ){}

  ngOnInit(): void {
    this.llenarData();
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
  enviarSocio(id: number) {
    this.router.navigateByUrl(`/actualizaSocio/${id}`);
  }
  eliminarSocio(id: number) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este socio con ID :' + id + ' ?');

    if (confirmacion) {
      console.log('Se ha codigido este ID del HTML : ' + id);
      this.apiService.deleteSocio(id).subscribe(
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

