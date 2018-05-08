import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Modulo01Service {

  constructor() { }

  getFuncionarios() {
    return ['Vakinha', 'Eric', 'Adrian', 'Zogbi', 'Maurício', 'Mirok'];
  }

}
