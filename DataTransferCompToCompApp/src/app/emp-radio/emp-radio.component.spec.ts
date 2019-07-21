import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRadioComponent } from './emp-radio.component';

describe('EmpRadioComponent', () => {
  let component: EmpRadioComponent;
  let fixture: ComponentFixture<EmpRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
