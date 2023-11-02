import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';
import { Proyecto } from 'src/app/core/models/proyecto';
import { VentanaemergenteComponent } from '../ventanaemergente/ventanaemergente.component';

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
  selectedDocument: string | undefined;

  constructor(private dialog: MatDialog) { }

  openPopup() {
    const dialogRef = this.dialog.open(VentanaemergenteComponent);

    dialogRef.afterClosed().subscribe(() => {
      // Realiza acciones después de que se cierra la ventana emergente si es necesario
    });
  }

  optionsTipo: any[] = [
    { tipo: 'Proyecto' },
    { tipo: 'Programas' },
    { tipo: 'Ministerios' }
  ];
  filteredOptionsTipo?: Observable<any[]>;

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
    
          optionsFacultad: any[] = [
            { facultad: 'facultad 1'},
            { facultad: 'facultad 2'},
            { facultad: 'facultad 3'}
              ];
           filteredOptionsFacultad?: Observable <any[]>;
    
           optionsEp: any[] = [
            { ep: 'ep 1'},
            { ep: 'ep 2'},
            { ep: 'ep 3'}
              ];
           filteredOptionsEp?: Observable <any[]>;
            
           optionsSemestre: any[] = [
            { semestre: 'semestre 1'},
            { semestre: 'semestre 2'},
            { semestre: 'semestre 3'}
              ];
           filteredOptionsSemestre?: Observable <any[]>;
        
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
    this.searchTipo();
    this.searchDepartamento();
    this.searchProvincia();
    this.searchDistrito();
    this.searchFacultad();
    this.searchEp();
    this.searchSemestre();
    this.searchCiclo();
    this.searchConvenio();
  }

  private _filterTipo(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.optionsTipo.filter(option => option.tipo.toLowerCase().includes(filterValue));
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
    return this.optionsFacultad.filter(option => option.facultad.toLowerCase().includes(filterValue));
  }
  private _filterEp(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.optionsEp.filter(option => option.ep.toLowerCase().includes(filterValue));
  }
  private _filterSemestre(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.optionsSemestre.filter(option => option.semestre.toLowerCase().includes(filterValue));
  }
  private _filterCiclo(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.optionsCiclo.filter(option => option.ciclo.toLowerCase().includes(filterValue));
  }
  private _filterConvenio(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.optionsConvenio.filter(option => option.convenio.toLowerCase().includes(filterValue));
  }



  public searchTipo() {
    this.filteredOptionsTipo = this.formGroup.get('tipo')?.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.tipo;
        return name ? this._filterTipo(name as string) : this.optionsTipo.slice();
      })
    );
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
  public searchFacultad() {
    this.filteredOptionsFacultad= this.formGroup.get('facultad')?.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.facultad;
        return name ? this._filterFacultad(name as string) : this.optionsFacultad.slice();
      })
    );
  }
  public searchEp() {
    this.filteredOptionsEp= this.formGroup.get('ep')?.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.ep;
        return name ? this._filterEp(name as string) : this.optionsEp.slice();
      })
    );
  }
  public searchSemestre() {
    this.filteredOptionsSemestre= this.formGroup.get('semestre')?.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.semestre;
        return name ? this._filterSemestre(name as string) : this.optionsSemestre.slice();
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
    return user && user.tipo ? user.tipo : '';
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
      tipo: new FormControl(this.usuario.tipo, [Validators.required]),
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