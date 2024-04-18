import { Component, OnInit } from '@angular/core';
import { NumerosService } from '../numeros/services/numeros.service';
import { NumerosComponent } from '../numeros/numeros.component';
import { OperadoresService } from '../operadores/services/operadores.service';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [NumerosComponent],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.css',
})
export class ResultadoComponent implements OnInit {
  numero: string = '';
  resultado: string = '';


  calculador: string = '';
  constructor(
    private numerObtenido: NumerosService,
    private operadorObtens: OperadoresService
  ) {}
  obtenerNumero() {
    this.numerObtenido.getNumeroClickado().subscribe((dato: any) => {
      this.numero += dato;
    });

    this.operadorObtens.getOperador().subscribe((dato: any) => {
      if (dato == '=') {
        this.numero = this.conversor(this.numero);
      } else if (dato == 'C') {
        this.numero = '';
      } else if (dato == '⌫') {
        this.numero = this.numero.slice(0, -1);
      } else {
        this.numero += dato;
      }
    });
  }

  conversor(args: string): string {
    try {
      const convertido = new Function(`return (${args})`)();

      if (!isNaN(convertido)) {
        if (Number.isInteger(convertido)) {
          return convertido.toString();
        } else {
          return convertido.toFixed(2);
        }
      } else {
        return 'Error: La expresión no es válida';
      }
    } catch (error) {
      console.error('Error al evaluar la expresión:', error);
      return 'Error: La expresión no es válida';
    }
  }

  ngOnInit(): void {
    this.obtenerNumero();
  }
}
