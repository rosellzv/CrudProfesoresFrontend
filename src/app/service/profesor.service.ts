import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from '../profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  //Url del listado de los profesores
  private baseURL = "http://localhost:8080/profesores";
  constructor(private httpClient : HttpClient) { }

  obtenerListaDeProfesores():Observable<Profesor[]>{
    return this.httpClient.get<Profesor[]>(`${this.baseURL}`);
  }

  registrarProfesor(profesor : Profesor):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,profesor);
  }

  eliminarProfesor(id: Number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  modificarProfesor(id: Number, profesor: Profesor):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,profesor);
  }
  buscarProfesor(id:Number):Observable<Profesor>{
    return this.httpClient.get<Profesor>(`${this.baseURL}/${id}`);
  }
}
