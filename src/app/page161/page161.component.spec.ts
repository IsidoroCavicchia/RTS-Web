import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page161Component } from './page161.component';

describe('Page161Component', () => {
  let component: Page161Component;
  let fixture: ComponentFixture<Page161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
