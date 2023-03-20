import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page14714Component } from './page14714.component';

describe('Page14714Component', () => {
  let component: Page14714Component;
  let fixture: ComponentFixture<Page14714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page14714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page14714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
