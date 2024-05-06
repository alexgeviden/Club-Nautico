import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Barco } from '../crud/barco';

@Injectable({
  providedIn: 'root'
})
export class BarcosService {

  private urlBarcos='http://localhost:3000/barcos';
  private urlSocios='http://localhost:3000/socios';

  constructor(private http: HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
getBarcoSocio(id: number): Observable<any[]>{
return this.http.get<any[]>(this.urlSocios+`/${id}`+'/barcos').pipe(
  catchError(error => {
    console.error('Error al obtener datos:', error);
    return throwError(error);
  })
);
}
  getDataSocios(): Observable<any[]> {
    return this.http.get<any[]>(this.urlSocios).pipe(
      catchError(error => {
        console.error('Error al obtener datos:', error);
        return throwError(error);
      })
    );
  }

  getBarco(num_matricula:number): Observable<any>{
    return this.http.get<any>(this.urlBarcos+`/${num_matricula}`);
  }
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.urlBarcos).pipe(
      catchError(error => {
        console.error('Error al obtener datos:', error);
        return throwError(error);
      })
    );
  }
 createBarco(barco: any): Observable<Barco> {
    return this.http.post<Barco>(this.urlBarcos, barco, this.httpOptions)
    .pipe( catchError((error: any) => {

      console.error('Error occurred:', error);
      throw error;
    })
    )
  }

  deleteBarco(num_matricula: number): Observable<any> {

    return this.http.delete<any>(this.urlBarcos+`/${num_matricula}`);
  }

  actualizarBarco(num_matricula: number, barcoActualizado: any): Observable<any> {
    return this.http.put<any>(this.urlBarcos+`/${num_matricula}`, barcoActualizado);
  }
}
