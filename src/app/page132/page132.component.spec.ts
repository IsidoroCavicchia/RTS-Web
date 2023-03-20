import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page132Component } from './page132.component';

describe('Page132Component', () => {
  let component: Page132Component;
  let fixture: ComponentFixture<Page132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
