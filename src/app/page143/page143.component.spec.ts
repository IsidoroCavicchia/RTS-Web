import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page143Component } from './page143.component';

describe('Page143Component', () => {
  let component: Page143Component;
  let fixture: ComponentFixture<Page143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
