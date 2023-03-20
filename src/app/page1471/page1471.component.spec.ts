import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1471Component } from './page1471.component';

describe('Page1471Component', () => {
  let component: Page1471Component;
  let fixture: ComponentFixture<Page1471Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1471Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
