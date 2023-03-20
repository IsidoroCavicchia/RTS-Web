import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1151Component } from './page1151.component';

describe('Page1151Component', () => {
  let component: Page1151Component;
  let fixture: ComponentFixture<Page1151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
