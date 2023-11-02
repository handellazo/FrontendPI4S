import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from 'src/app/core/models/convenio';


@Injectable({
  providedIn: 'root'
})
export class ConvenioService {
 
  private baseURL="Http://localhost:9090/api/listConvenio"
 
  constructor(private httpClient : HttpClient){}

  obtenerListaConvenios():Observable<Convenio[]>{
    return this.httpClient.get<Convenio[]>(this.baseURL)
  }
}
