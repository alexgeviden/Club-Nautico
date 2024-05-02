import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SociosService {
private urlApi='http://localhost:3000/socios';
  constructor(private http: HttpClient ) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.urlApi).pipe(
      catchError(error => {
        console.error('Error al obtener datos:', error);
        return throwError(error);
      })
    );
  }
}
