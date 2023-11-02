import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';
import { Proyecto } from 'src/app/core/models/proyecto';
import { VentanaemergenteComponent } from '../ventanaemergente/ventanaemergente.component';
import {  TipoProyecto } from 'src/app/core/models/tipoproyecto.dto';
import { Router } from '@angular/router';
import { ProyectoserviceService} from '../../../services/proyectoservice.service';
import { RouterTestingHarness } from '@angular/router/testing';
import { SemestreProyecto } from 'src/app/core/models/semestreproyecto.models';
import { EpProyecto } from 'src/app/core/models/epproyecto.models';
import { FacultadProyecto } from 'src/app/core/models/facultadproyecto.models';

@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styleUrls: ['./form-proyecto.component.css']
})
export class FormProyectoComponent implements OnInit{
  usuario!: Proyecto;
  formGroup: FormGroup = new FormGroup({});
  matcher = new MyErrorStateMatcher();
  hide: boolean = true;
  menu: any;

// Tipo proyecto
tipoproyectolist: TipoProyecto[] = [];
// Semestre
semestrelist: SemestreProyecto[] = [];
// EP
eplist: EpProyecto[]=[];
// FACULTAD
facultadlist: FacultadProyecto[] = [];

constructor(private dialog: MatDialog, private router : Router, private proyectoservice: ProyectoserviceService) { }


  openPopup() {
    const dialogRef = this.dialog.open(VentanaemergenteComponent);

    dialogRef.afterClosed().subscribe(() => {
    });
  }


//Tipo Proyecto
  listarTipoProyecto() {
    this.proyectoservice.listarTipo().subscribe({
next: (resp:TipoProyecto[]) => {
  this.tipoproyectolist = resp
},
error: (err:any) => {console.log(err)}
    })
  }
//SEMESTRE
  listarSemestre(){
    this.proyectoservice.listarSemestre().subscribe({
      next: (resp:SemestreProyecto[]) => {
      this.semestrelist=resp
  },
  error: (err:any) => {console.log(err)}
})
}
//EP
listarEp() {
  this.proyectoservice.listarEp().subscribe({
    next: (resp:EpProyecto[]) => {
      this.eplist=resp
    },
    error: (err:any) => {console.log(err)}
  });
}

//FACULTAD 

listarFacultad() {
  this.proyectoservice.listarFacultad().subscribe({
  next: (resp: FacultadProyecto[]) => {
    this.facultadlist=resp
  },
  error: (err:any) => {console.log(err)}
  });
}



  //Departamento
  optionsDepartamento: any[] = [
    { departamento: 'Departamento 1'},
    { departamento: 'Departamento 2'},
    { departamento: 'Departamento 3'}
      ];
      filteredOptionsDepartamento?: Observable <any[]>;
    
      optionsProvincia: any[] = [
        { provincia: 'provincia 1'},
        { provincia: 'provincia 2'},
        { provincia: 'provincia 3'}
          ];
          filteredOptionsProvincia?: Observable <any[]>;
        
      optionsDistrito: any[] = [
        { distrito: 'distrito 1'},
        { distrito: 'distrito 2'},
        { distrito: 'distrito 3'}
          ];
          filteredOptionsDistrito?: Observable <any[]>;
    
        
           optionsCiclo: any[] = [
            { ciclo: 'I' },
            { ciclo: 'II' },
            { ciclo: 'III' },
            { ciclo: 'IV' },
            { ciclo: 'V' },
            { ciclo: 'VI' },
            { ciclo: 'VII' },
            { ciclo: 'VIII' },
            { ciclo: 'IX' },
            { ciclo: 'X' }
          ];
          filteredOptionsCiclo?: Observable<any[]>;
        
        
          optionsConvenio: any[] = [
            { convenio: 'convenio 1'},
            { convenio: 'convenio 2'},
            { convenio: 'convenio 3'}
              ];
           filteredOptionsConvenio?: Observable <any[]>;
        
      

  ngOnInit() {
    this.inithiliazerInputs();
    this.listarTipoProyecto();
    this.searchDepartamento();
    this.searchProvincia();
    this.searchDistrito();
    this.listarFacultad();
    this.listarEp();
    this.listarSemestre();
    this.searchCiclo();
    this.searchConvenio();
  }

  private _filterTipo(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.tipoproyectolist.filter(option => option.tipoPy.toLowerCase().includes(filterValue));
  }
  private _filterDepartamento(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.optionsDepartamento.filter(option => option.departamento.toLowerCase().includes(filterValue));
  }
  private _filterProvincia(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.optionsProvincia.filter(option => option.provincia.toLowerCase().includes(filterValue));
  }
  private _filterDistrito(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.optionsDistrito.filter(option => option.distrito.toLowerCase().includes(filterValue));
  }

  private _filterFacultad(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.facultadlist.filter(option => option.facultad.toLowerCase().includes(filterValue));
  }
  private _filterEp(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.eplist.filter(option => option.ep.toLowerCase().includes(filterValue));
  }
  private _filterSemestre(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.semestrelist.filter(option => option.semestre.toLowerCase().includes(filterValue));
  }
  private _filterCiclo(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.optionsCiclo.filter(option => option.ciclo.toLowerCase().includes(filterValue));
  }
  private _filterConvenio(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.optionsConvenio.filter(option => option.convenio.toLowerCase().includes(filterValue));
  }



 
  public searchDepartamento() {
    this.filteredOptionsDepartamento= this.formGroup.get('departamento')?.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.departamento;
        return name ? this._filterDepartamento(name as string) : this.optionsDepartamento.slice();
      })
    );
  }

  public searchProvincia() {
    this.filteredOptionsProvincia= this.formGroup.get('provincia')?.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.provincia;
        return name ? this._filterProvincia(name as string) : this.optionsProvincia.slice();
      })
    );
  }
  public searchDistrito() {
    this.filteredOptionsDistrito= this.formGroup.get('distrito')?.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.distrito;
        return name ? this._filterDistrito(name as string) : this.optionsDistrito.slice();
      })
    );
  }
 

  public searchCiclo() {
    this.filteredOptionsCiclo = this.formGroup.get('ciclo')?.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.ciclo;
        return name ? this._filterCiclo(name as string) : this.optionsCiclo.slice();
      })
    );
  }
  public searchConvenio() {
    this.filteredOptionsConvenio = this.formGroup.get('convenio')?.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.convenio;
        return name ? this._filterConvenio(name as string) : this.optionsConvenio.slice();
      })
    );
  }


  public displayFn(user: any): string {
    return user && user.name ? user.name : '';
  }

  public displayFn2(user: any): string {
    return user && user.tipoPy ? user.tipoPy: '';
  }

  public displayFn3(user: any): string {
    return user && user.departamento ? user.departamento : '';
  }

 public displayFn4(user: any): string {
    return user && user.provincia ? user.provincia: '';
  }
  public displayFn5(user: any): string {
    return user && user.distrito ? user.distrito: '';
  }
  public displayFn6(user: any): string {
    return user && user.facultad? user.facultad: '';
  }
  public displayFn7(user: any): string {
    return user && user.ep? user.ep: '';
  }
  public displayFn8(user: any): string {
    return user && user.semestre? user.semestre: '';
  }

  public displayFn9(user: any): string {
    return user && user.ciclo ? user.ciclo : '';
  }

  public displayFn10(user: any): string {
    return user && user.convenio ? user.convenio : '';
  }





  public inithiliazerInputs() {
    this.usuario = new Proyecto();
    this.formGroup = new FormGroup({
      nombre: new FormControl(this.usuario.nombre, [Validators.required]),
      tipoPy: new FormControl(this.usuario.tipoPy, [Validators.required]),
      departamento: new FormControl(this.usuario.departamento, [Validators.required]),
      provincia: new FormControl(this.usuario.provincia, [Validators.required]),
      distrito: new FormControl(this.usuario.distrito, [Validators.required]),
      referencia: new FormControl(this.usuario.referencia, [Validators.required]),
      presupuesto: new FormControl(this.usuario.presupuesto, [Validators.required]),
      facultad: new FormControl(this.usuario.facultad, [Validators.required]),
      ep: new FormControl(this.usuario.ep, [Validators.required]),
      semestre: new FormControl(this.usuario.semestre, [Validators.required]),
      ciclo: new FormControl(this.usuario.ciclo, [Validators.required]),
      convenio: new FormControl(this.usuario.convenio, [Validators.required]),
    });
  }

  public send() {
    if (this.formGroup.valid) {
      // Realizar acciones con los datos del formulario
      console.log(this.formGroup.value);
    }
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }





}
