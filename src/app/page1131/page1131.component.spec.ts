import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1131Component } from './page1131.component';

describe('Page1131Component', () => {
  let component: Page1131Component;
  let fixture: ComponentFixture<Page1131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
