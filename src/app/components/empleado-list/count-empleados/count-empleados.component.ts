import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})

export class CountEmpleadosComponent {
  @Input() todos:number;
  @Input() femeninos:number;
  @Input() masculinos:number;
  @Output() buttonChange = new EventEmitter<string>();

  radioSeleccionado = "Todos";

  constructor(){
   this.todos = 0
   this.femeninos = 0
   this.masculinos = 0
  }

  radioChange(): void {
    this.buttonChange.emit(this.radioSeleccionado)
  }
}
  


