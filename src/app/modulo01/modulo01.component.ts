import { Component, OnInit } from '@angular/core';

import { Modulo01Service } from "./modulo01.service";

@Component({
  selector: 'app-modulo01',
  templateUrl: './modulo01.component.html',
  styleUrls: ['./modulo01.component.css']
})

export class Modulo01Component implements OnInit {
  nomePortal: string;
  linkPortal: string;
  funcionarios: string[];

  constructor(private moduloService: Modulo01Service) {
    this.linkPortal = 'http://blueshift.cc';
    this.nomePortal = 'blueshift.cc';
    this.funcionarios = this.moduloService.getFuncionarios();
  }

  ngOnInit() {
  }
}
