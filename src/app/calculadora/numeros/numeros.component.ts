import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NumerosService } from './services/numeros.service';

@Component({
  selector: 'app-numeros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './numeros.component.html',
  styleUrl: './numeros.component.css',
})
export class NumerosComponent implements OnInit {
  numeros: number[] = [];
  constructor(private numerito: NumerosService) {
    this.numeros = Array.from({ length: 10 }, (_, i) => i);
  }

  private obtencionNumero: any;

  getNumero(args: string): void {
    this.obtencionNumero = args;
    this.setNumero(this.obtencionNumero);
  }

  setNumero(dato: string): void {
    this.numerito.setNumeroClickado(dato);
  }

  ngOnInit(): void {}
}
