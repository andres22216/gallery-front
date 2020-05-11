import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeErrorExitoComponent } from './mensaje-error-exito.component';

describe('MensajeErrorExitoComponent', () => {
  let component: MensajeErrorExitoComponent;
  let fixture: ComponentFixture<MensajeErrorExitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeErrorExitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeErrorExitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
