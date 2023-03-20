import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1133Component } from './page1133.component';

describe('Page1133Component', () => {
  let component: Page1133Component;
  let fixture: ComponentFixture<Page1133Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1133Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
