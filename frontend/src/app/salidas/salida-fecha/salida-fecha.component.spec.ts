import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaFechaComponent } from './salida-fecha.component';

describe('SalidaFechaComponent', () => {
  let component: SalidaFechaComponent;
  let fixture: ComponentFixture<SalidaFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalidaFechaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalidaFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
