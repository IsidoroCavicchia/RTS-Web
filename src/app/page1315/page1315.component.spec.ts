import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1315Component } from './page1315.component';

describe('Page1315Component', () => {
  let component: Page1315Component;
  let fixture: ComponentFixture<Page1315Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1315Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
