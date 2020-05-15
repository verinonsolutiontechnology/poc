import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NAV1Component } from './nav1.component';

describe('NAV1Component', () => {
  let component: NAV1Component;
  let fixture: ComponentFixture<NAV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NAV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NAV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
