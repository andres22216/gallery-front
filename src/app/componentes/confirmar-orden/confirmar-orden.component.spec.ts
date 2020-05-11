import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarOrdenComponent } from './confirmar-orden.component';

describe('ConfirmarOrdenComponent', () => {
  let component: ConfirmarOrdenComponent;
  let fixture: ComponentFixture<ConfirmarOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
