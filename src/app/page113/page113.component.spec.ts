import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page113Component } from './page113.component';

describe('Page113Component', () => {
  let component: Page113Component;
  let fixture: ComponentFixture<Page113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
