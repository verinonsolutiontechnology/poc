import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NAV3Component } from './nav3.component';

describe('NAV3Component', () => {
  let component: NAV3Component;
  let fixture: ComponentFixture<NAV3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NAV3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NAV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
