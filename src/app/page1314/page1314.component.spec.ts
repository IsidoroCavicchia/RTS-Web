import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1314Component } from './page1314.component';

describe('Page1314Component', () => {
  let component: Page1314Component;
  let fixture: ComponentFixture<Page1314Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1314Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
