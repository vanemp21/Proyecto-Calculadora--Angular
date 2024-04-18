import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OperadoresService {
  private _operadorClickado: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  constructor() {}
  getOperador(): Observable<any> {
    return this._operadorClickado.asObservable();
  }

  setOperador(nuevoDato: any) {
    this._operadorClickado.next(nuevoDato);
  }
}
