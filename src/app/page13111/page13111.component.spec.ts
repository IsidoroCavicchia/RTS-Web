import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page13111Component } from './page13111.component';

describe('Page13111Component', () => {
  let component: Page13111Component;
  let fixture: ComponentFixture<Page13111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page13111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page13111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
