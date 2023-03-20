import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page13122Component } from './page13122.component';

describe('Page13122Component', () => {
  let component: Page13122Component;
  let fixture: ComponentFixture<Page13122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page13122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page13122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
