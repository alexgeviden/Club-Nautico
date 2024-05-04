import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaSocioComponent } from './agrega-socio.component';

describe('AgregaSocioComponent', () => {
  let component: AgregaSocioComponent;
  let fixture: ComponentFixture<AgregaSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregaSocioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregaSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
