import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page122Component } from './page122.component';

describe('Page122Component', () => {
  let component: Page122Component;
  let fixture: ComponentFixture<Page122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
