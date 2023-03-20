import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page145Component } from './page145.component';

describe('Page145Component', () => {
  let component: Page145Component;
  let fixture: ComponentFixture<Page145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
