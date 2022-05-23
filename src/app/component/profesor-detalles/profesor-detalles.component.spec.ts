import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorDetallesComponent } from './profesor-detalles.component';

describe('ProfesorDetallesComponent', () => {
  let component: ProfesorDetallesComponent;
  let fixture: ComponentFixture<ProfesorDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
