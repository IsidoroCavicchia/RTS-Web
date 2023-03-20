import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1472Component } from './page1472.component';

describe('Page1472Component', () => {
  let component: Page1472Component;
  let fixture: ComponentFixture<Page1472Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1472Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
