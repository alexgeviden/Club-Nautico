import { Component, OnInit } from '@angular/core';
import { BarcosService } from '../../service/barcos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Barco } from '../../crud/barco';

@Component({
  selector: 'app-actualiza-barco',
  templateUrl: './actualiza-barco.component.html',
  styleUrl: './actualiza-barco.component.css'
})
export class ActualizaBarcoComponent implements OnInit {

  constructor(private barcoService: BarcosService , private route: ActivatedRoute , private router: Router ) { }

  barcoActualizado:Barco = { num_matricula: 0, nombre: '' , amarre: 0 , idsocio: 0 };
  num_matricula:number = 0;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.nuevosDatos(id);
      this.num_matricula = id;
    });
  }


  nuevosDatos(id: number): void {
    this.barcoService.getBarco(id).subscribe(
      barco => {
        this.barcoActualizado = barco;
      },
      error => {
        console.error('Error al obtener el barco:', error);
      }
    );
  }

  actualizarBarco() {
    this.barcoService.getBarco(this.num_matricula);
    this.barcoService.actualizarBarco(this.num_matricula, this.barcoActualizado).subscribe(
      () => {
        console.log('Barco actualizado con éxito');
      },
      error => {
        console.error('Error al actualizar socio:', error);
      }
    );
    this.router.navigateByUrl(`/barcos`);
  }
}
