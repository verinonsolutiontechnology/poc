import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NAV4Component } from './nav4.component';

describe('NAV4Component', () => {
  let component: NAV4Component;
  let fixture: ComponentFixture<NAV4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NAV4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NAV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
