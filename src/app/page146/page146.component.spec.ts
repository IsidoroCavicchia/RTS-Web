import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page146Component } from './page146.component';

describe('Page146Component', () => {
  let component: Page146Component;
  let fixture: ComponentFixture<Page146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
