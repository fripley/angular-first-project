import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modulo01Component } from './modulo01.component';
import { Modulo01Service } from './modulo01.service';
import { ModuloDetalhesComponent } from './modulo-detalhes/modulo-detalhes.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Modulo01Component,
    ModuloDetalhesComponent
  ],
  exports: [
    Modulo01Component
  ],
  providers: [
    Modulo01Service
  ]
})
export class Modulo01Module { }
