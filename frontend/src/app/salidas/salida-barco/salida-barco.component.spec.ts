import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaBarcoComponent } from './salida-barco.component';

describe('SalidaBarcoComponent', () => {
  let component: SalidaBarcoComponent;
  let fixture: ComponentFixture<SalidaBarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalidaBarcoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalidaBarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
