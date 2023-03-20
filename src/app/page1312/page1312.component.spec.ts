import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1312Component } from './page1312.component';

describe('Page1312Component', () => {
  let component: Page1312Component;
  let fixture: ComponentFixture<Page1312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1312Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
