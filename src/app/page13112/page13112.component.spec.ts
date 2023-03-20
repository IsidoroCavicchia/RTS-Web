import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page13112Component } from './page13112.component';

describe('Page13112Component', () => {
  let component: Page13112Component;
  let fixture: ComponentFixture<Page13112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page13112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page13112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
