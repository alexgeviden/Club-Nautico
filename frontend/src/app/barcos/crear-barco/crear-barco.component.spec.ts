import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBarcoComponent } from './crear-barco.component';

describe('CrearBarcoComponent', () => {
  let component: CrearBarcoComponent;
  let fixture: ComponentFixture<CrearBarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearBarcoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearBarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
