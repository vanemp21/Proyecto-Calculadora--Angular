import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumerosService {
  private _numeroClickado: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  constructor() {}

  getNumeroClickado(): Observable<any> {
    return this._numeroClickado.asObservable();
  }

  setNumeroClickado(num: string): void {
    this._numeroClickado.next(num);
  }
}
