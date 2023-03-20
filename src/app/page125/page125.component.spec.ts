import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page125Component } from './page125.component';

describe('Page125Component', () => {
  let component: Page125Component;
  let fixture: ComponentFixture<Page125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
