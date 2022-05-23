import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarProfesorComponent } from './adicionar-profesor.component';

describe('AdicionarProfesorComponent', () => {
  let component: AdicionarProfesorComponent;
  let fixture: ComponentFixture<AdicionarProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
