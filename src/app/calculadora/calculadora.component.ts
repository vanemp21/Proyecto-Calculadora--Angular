import { Component } from '@angular/core';
import { NumerosComponent } from './numeros/numeros.component';
import { OperadoresComponent } from './operadores/operadores.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [NumerosComponent,OperadoresComponent,ResultadoComponent, CommonModule],
  providers:[],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

}
