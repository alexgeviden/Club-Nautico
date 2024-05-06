import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcoSocioComponent } from './barco-socio.component';

describe('BarcoSocioComponent', () => {
  let component: BarcoSocioComponent;
  let fixture: ComponentFixture<BarcoSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarcoSocioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarcoSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
