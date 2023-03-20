import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page111Component } from './page111.component';

describe('Page111Component', () => {
  let component: Page111Component;
  let fixture: ComponentFixture<Page111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
