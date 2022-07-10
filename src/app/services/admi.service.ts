import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdmiService {
  //url = "http://escuela.poli";
  //url = "http://integracion.poli/api";
  url = "http://localhost:8000/api";
  constructor(private http: HttpClient) {}

  getNoticias(): Observable<any> {
    return this.http.get(`${this.url}/noticias`);
  }

  setNoticias(noticia): Observable<any> {
    return this.http.post(`${this.url}/noticias`, noticia);
  }

  deleteNoticias(id): Observable<any> {
    return this.http.delete(`${this.url}/noticias/${id}`);
  }

  setupdateNoticias(id, noticia): Observable<any> {
    return this.http.put(`${this.url}/noticias/${id}`, noticia);
  }

  getAplicaciones(): Observable<any> {
    return this.http.get(`${this.url}/aplicaciones`);
  }

  setAplicaciones(aplicacion): Observable<any> {
    return this.http.post(`${this.url}/aplicaciones`, aplicacion);
  }

  deleteAplicaciones(id): Observable<any> {
    return this.http.delete(`${this.url}/aplicaciones/${id}`);
  }

  setupdateAplicaciones(id, aplicacion): Observable<any> {
    return this.http.put(`${this.url}/aplicaciones/${id}`, aplicacion);
  }
}
