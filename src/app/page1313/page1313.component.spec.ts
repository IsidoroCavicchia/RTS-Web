import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1313Component } from './page1313.component';

describe('Page1313Component', () => {
  let component: Page1313Component;
  let fixture: ComponentFixture<Page1313Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1313Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
