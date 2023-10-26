import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  public URL:string = 'http://localhost:9090/api/persona'
  constructor(private http:HttpClient) {

  }
  public getAllPersona():Observable<any>{
    return this.http.get(`${this.URL}/all`)
  }
}
