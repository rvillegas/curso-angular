import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMaquinasComponent } from './lista-maquinas.component';

describe('ListaMaquinasComponent', () => {
  let component: ListaMaquinasComponent;
  let fixture: ComponentFixture<ListaMaquinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMaquinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMaquinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
