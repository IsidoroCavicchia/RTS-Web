import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page116Component } from './page116.component';

describe('Page116Component', () => {
  let component: Page116Component;
  let fixture: ComponentFixture<Page116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
