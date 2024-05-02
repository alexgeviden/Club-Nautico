import { Component, OnInit } from '@angular/core';
import { SociosService } from '../service/socios.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css'] // Corrected property name
})
export class SociosComponent implements OnInit {

  data: any[] = [];
  datos: any[] = [];

  constructor(private apiService: SociosService , private sanitizer: DomSanitizer ){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe(data => {
      // Check if data is an array; if not, convert it to an array
      if (Array.isArray(data)) {
        this.data = data[0];
      } else if (typeof data === 'object') {
        // Convert object to an array of values
       this.datos = Object.values(data);
      } else {
        // Handle other cases as needed
      }
      this.data = this.datos[0];
      console.log(this.data[0]);
    });
  }
  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

