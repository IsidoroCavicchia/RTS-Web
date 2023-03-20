import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1611Component } from './page1611.component';

describe('Page1611Component', () => {
  let component: Page1611Component;
  let fixture: ComponentFixture<Page1611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1611Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
