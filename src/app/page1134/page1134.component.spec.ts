import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1134Component } from './page1134.component';

describe('Page1134Component', () => {
  let component: Page1134Component;
  let fixture: ComponentFixture<Page1134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
