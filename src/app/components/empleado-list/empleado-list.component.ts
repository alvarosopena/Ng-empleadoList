import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {
  listEmpleados: Empleado[] = [
    {legajo: 1, nombre: "Juan", apellido: "Perez", sexo: "Masculino", salario: 54896 },
    {legajo: 2, nombre: "Juana", apellido: "Lopez", sexo: "Femenino", salario: 54006 },
    {legajo: 3, nombre: "Maria", apellido: "Gonzalez", sexo: "Femenino", salario: 54696 },
    {legajo: 4, nombre: "Lautaro", apellido: "Martinez", sexo: "Masculino", salario: 504896 },
    {legajo: 5, nombre: "Juan Carlos", apellido: "Lopez", sexo: "Masculino", salario: 154896 },
    {legajo: 6, nombre: "Juana Carlas", apellido: "Lopez", sexo: "Femenino", salario: 1548096 }
  ];
  

  totalEmpleados():number {
    return this.listEmpleados.length
  }
  totalFemeninos():number {
    return this.listEmpleados.filter(list => list.sexo==="Femenino").length;
  }
  totalMasculinos():number {
    return this.listEmpleados.filter(list => list.sexo==="Masculino").length;
  }

  radioSeleccionado = "Todos";
  empleadoCountRadioButtonChange(radioSele:string):void{
    this.radioSeleccionado = "radioSele"
  }

}
