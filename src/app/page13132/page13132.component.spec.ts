import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page13132Component } from './page13132.component';

describe('Page13132Component', () => {
  let component: Page13132Component;
  let fixture: ComponentFixture<Page13132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page13132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page13132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
