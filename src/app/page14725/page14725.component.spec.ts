import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page14725Component } from './page14725.component';

describe('Page14725Component', () => {
  let component: Page14725Component;
  let fixture: ComponentFixture<Page14725Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page14725Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page14725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
