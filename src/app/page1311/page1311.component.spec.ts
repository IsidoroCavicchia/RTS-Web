import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1311Component } from './page1311.component';

describe('Page1311Component', () => {
  let component: Page1311Component;
  let fixture: ComponentFixture<Page1311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
