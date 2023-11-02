export class Proyecto {
    id?: number;
    nombre: string = '';
    referencia: string = '';
    presupuesto: number = 0;
    ciclo: string = '';
    fechainicio!: Date; 
    fechafin!: Date; 
    representante: string = '';
  
    tipo: string = '';
    departamento: string = '';
    provincia: string = '';
    distrito: string = '';
    facultad: string = '';
    ep: string = '';
    semestre: string = '';
  
    convenio: string = '';
    cursos: string = '';
    docentes: string = '';
  
  }