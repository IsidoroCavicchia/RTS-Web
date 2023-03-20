import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1812Component } from './page1812.component';

describe('Page1812Component', () => {
  let component: Page1812Component;
  let fixture: ComponentFixture<Page1812Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1812Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
