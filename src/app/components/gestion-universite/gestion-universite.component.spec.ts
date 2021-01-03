import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUniversiteComponent } from './gestion-universite.component';

describe('ListeFacComponent', () => {
  let component: GestionUniversiteComponent;
  let fixture: ComponentFixture<GestionUniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionUniversiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});