import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1152Component } from './page1152.component';

describe('Page1152Component', () => {
  let component: Page1152Component;
  let fixture: ComponentFixture<Page1152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
