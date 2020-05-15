import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NAV5Component } from './nav5.component';

describe('NAV5Component', () => {
  let component: NAV5Component;
  let fixture: ComponentFixture<NAV5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NAV5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NAV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
