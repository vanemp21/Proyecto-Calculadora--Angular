import { Component, OnInit } from '@angular/core';
import { OperadoresService } from './services/operadores.service';

@Component({
  selector: 'app-operadores',
  standalone: true,
  imports: [],
  templateUrl: './operadores.component.html',
  styleUrl: './operadores.component.css',
})
export class OperadoresComponent implements OnInit {
  constructor(private obtenerDato: OperadoresService) {}
  operadorActual: string = '';
  operadorObtenido: string = '';
  reiniciarOperador: string = '';
  getOperador(operador: string) {
    if (operador === '.' && this.operadorActual.includes('.')) {
      console.log('Ya hay un punto decimal presente');
      return;
    }
    if (this.esOperador(this.operadorActual) && this.esOperador(operador)) {
      return;
    }
    if (this.operadorActual === '' || operador === '=' || operador === 'C') {
      console.log('Hay operador');
      this.operadorActual = operador;
      this.fijarDato(this.operadorActual);

      if (operador === '=' || operador === 'C') {
        this.operadorActual = '';
      }
    } else {
      this.operadorActual = this.reiniciarOperador;
      this.operadorActual += operador;
      this.fijarDato(this.operadorActual);
    }
  }
  esOperador(caracter: string) {
    return (
      caracter === '+' ||
      caracter === '-' ||
      caracter === '/' ||
      caracter === '*'
    );
  }

  fijarDato(dato: string): void {
    //<--- Esto es lo que va a hacer la función
    this.obtenerDato.setOperador(dato);
  }
  ngOnInit(): void {}
}
