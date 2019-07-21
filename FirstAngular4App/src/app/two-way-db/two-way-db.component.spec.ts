import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDBComponent } from './two-way-db.component';

describe('TwoWayDBComponent', () => {
  let component: TwoWayDBComponent;
  let fixture: ComponentFixture<TwoWayDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
