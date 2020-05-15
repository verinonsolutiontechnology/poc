import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NAV2Component } from './nav2.component';

describe('NAV2Component', () => {
  let component: NAV2Component;
  let fixture: ComponentFixture<NAV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NAV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NAV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
