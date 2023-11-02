import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EpProyecto } from 'src/app/core/models/epproyecto.models';
import { FacultadProyecto } from 'src/app/core/models/facultadproyecto.models';
import { SemestreProyecto } from 'src/app/core/models/semestreproyecto.models';
import { TipoProyecto } from 'src/app/core/models/tipoproyecto.dto';

@Injectable({
  providedIn: 'root'
})

export class ProyectoserviceService {

 
  url:string = 'http://localhost:9090/api/'
  constructor(private http:HttpClient) { }

  listarTipo(){
return this.http.get<TipoProyecto[]>(`${this.url}TIPOPY/listTipoPy`) 
  }

 listarSemestre(){
    return this.http.get<SemestreProyecto[]>(`${this.url}SEMESTRE/listSemestre`)
  }

listarEp(){
return this.http.get<EpProyecto[]>(`${this.url}EP/listEp`)
}

listarFacultad(){
  return this.http.get<FacultadProyecto[]>(`${this.url}FACULTAD/listFacultad`)

}
}

