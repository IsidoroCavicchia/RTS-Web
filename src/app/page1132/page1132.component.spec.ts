import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1132Component } from './page1132.component';

describe('Page1132Component', () => {
  let component: Page1132Component;
  let fixture: ComponentFixture<Page1132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
