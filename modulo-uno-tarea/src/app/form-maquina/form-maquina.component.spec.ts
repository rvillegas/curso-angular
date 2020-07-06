import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMaquinaComponent } from './form-maquina.component';

describe('FormMaquinaComponent', () => {
  let component: FormMaquinaComponent;
  let fixture: ComponentFixture<FormMaquinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMaquinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
