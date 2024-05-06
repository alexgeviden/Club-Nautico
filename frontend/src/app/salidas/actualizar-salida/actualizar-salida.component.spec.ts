import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarSalidaComponent } from './actualizar-salida.component';

describe('ActualizarSalidaComponent', () => {
  let component: ActualizarSalidaComponent;
  let fixture: ComponentFixture<ActualizarSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarSalidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
