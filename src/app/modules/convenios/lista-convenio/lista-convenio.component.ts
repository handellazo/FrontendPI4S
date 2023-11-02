import { Component, OnInit } from '@angular/core';
import { Convenio } from 'src/app/core/models/convenio';
import { ConvenioService } from '../services/convenio.service';

@Component({
  selector: 'app-lista-convenio',
  templateUrl: './lista-convenio.component.html',
  styleUrls: ['./lista-convenio.component.css']
})
export class ListaConvenioComponent implements OnInit{
convenio:Convenio[];
constructor(private convenioServicio:ConvenioService){}
ngOnInit(): void {
  this.obterConvenios();
}
private obterConvenios(){
  this.convenioServicio.obtenerListaConvenios().subscribe(dato =>{
    this.convenio = dato;
  })
}

}
