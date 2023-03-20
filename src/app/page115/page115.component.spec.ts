import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page115Component } from './page115.component';

describe('Page115Component', () => {
  let component: Page115Component;
  let fixture: ComponentFixture<Page115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
