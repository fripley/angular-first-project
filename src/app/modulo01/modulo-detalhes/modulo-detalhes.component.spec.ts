import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloDetalhesComponent } from './modulo-detalhes.component';

describe('ModuloDetalhesComponent', () => {
  let component: ModuloDetalhesComponent;
  let fixture: ComponentFixture<ModuloDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
