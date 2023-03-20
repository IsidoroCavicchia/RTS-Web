import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1321Component } from './page1321.component';

describe('Page1321Component', () => {
  let component: Page1321Component;
  let fixture: ComponentFixture<Page1321Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1321Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
