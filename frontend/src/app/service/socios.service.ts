import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Socio } from '../crud/socio';
@Injectable({
  providedIn: 'root'
})
export class SociosService {
private urlSocio='http://localhost:3000/socios';

  constructor(private http: HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.urlSocio).pipe(
      catchError(error => {
        console.error('Error al obtener datos:', error);
        return throwError(error);
      })
    );
  }

  getSocio(id:number): Observable<any>{
    return this.http.get<any>(this.urlSocio+`/${id}`);
  }

 createSocio(socio: any): Observable<Socio> {
    return this.http.post<Socio>(this.urlSocio, socio, this.httpOptions)
    .pipe( catchError((error: any) => {

      console.error('Error occurred:', error);
      throw error;
    })
    )
  }

  deleteSocio(id: number): Observable<any> {

    return this.http.delete<any>(this.urlSocio+`/${id}`);
  }

  actualizarSocio(id: number, socioActualizado: any): Observable<any> {
    return this.http.put<any>(this.urlSocio+`/${id}`, socioActualizado);
  }
}
