import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaBarcoComponent } from './actualiza-barco.component';

describe('ActualizaBarcoComponent', () => {
  let component: ActualizaBarcoComponent;
  let fixture: ComponentFixture<ActualizaBarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizaBarcoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizaBarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
