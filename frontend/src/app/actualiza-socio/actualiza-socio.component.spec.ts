import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaSocioComponent } from './actualiza-socio.component';

describe('ActualizaSocioComponent', () => {
  let component: ActualizaSocioComponent;
  let fixture: ComponentFixture<ActualizaSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizaSocioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizaSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
