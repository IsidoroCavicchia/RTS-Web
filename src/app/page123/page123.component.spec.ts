import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page123Component } from './page123.component';

describe('Page123Component', () => {
  let component: Page123Component;
  let fixture: ComponentFixture<Page123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
