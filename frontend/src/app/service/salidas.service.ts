import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Salida } from '../crud/salidas';

@Injectable({
  providedIn: 'root'
})
export class SalidasService {

  private urlSalidas='http://localhost:3000/salidas';
  private urlPatron='http://localhost:3000/patrones';
  private urlBarco='http://localhost:3000/barcos';
  constructor( private http: HttpClient ){ }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getSalida(idsalida:number): Observable<any>{
    return this.http.get<any>(this.urlSalidas+`/${idsalida}`);
  }
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.urlSalidas).pipe(
      catchError(error => {
        console.error('Error al obtener datos:', error);
        return throwError(error);
      })
    );
  }
 createSalida(Salida: any): Observable<Salida> {
    return this.http.post<Salida>(this.urlSalidas, Salida, this.httpOptions)
    .pipe( catchError((error: any) => {

      console.error('Error occurred:', error);
      throw error;
    })
    )
  }

  deleteSalida(idsalida: number): Observable<any> {

    return this.http.delete<any>(this.urlSalidas+`/${idsalida}`);
  }

  actualizarSalida(idsalida: number, SalidaActualizado: any): Observable<any> {
    return this.http.put<any>(this.urlSalidas+`/${idsalida}`, SalidaActualizado);
  }
  getDataPatron(){
    return this.http.get<any[]>(this.urlPatron).pipe(
      catchError(error => {
        console.error('Error al obtener datos:', error);
        return throwError(error);
      })
    );

}
getDataBarco(){
  return this.http.get<any[]>(this.urlBarco).pipe(
    catchError(error => {
      console.error('Error al obtener datos:', error);
      return throwError(error);
    })
  );

}
}
