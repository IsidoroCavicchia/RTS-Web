import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page14711Component } from './page14711.component';

describe('Page14711Component', () => {
  let component: Page14711Component;
  let fixture: ComponentFixture<Page14711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page14711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page14711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
