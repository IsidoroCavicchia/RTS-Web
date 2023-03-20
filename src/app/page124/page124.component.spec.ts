import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page124Component } from './page124.component';

describe('Page124Component', () => {
  let component: Page124Component;
  let fixture: ComponentFixture<Page124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
