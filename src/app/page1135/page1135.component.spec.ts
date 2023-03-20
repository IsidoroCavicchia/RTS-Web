import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1135Component } from './page1135.component';

describe('Page1135Component', () => {
  let component: Page1135Component;
  let fixture: ComponentFixture<Page1135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
