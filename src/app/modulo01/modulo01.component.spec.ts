import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo01Component } from './modulo01.component';

describe('Modulo01Component', () => {
  let component: Modulo01Component;
  let fixture: ComponentFixture<Modulo01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modulo01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modulo01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
