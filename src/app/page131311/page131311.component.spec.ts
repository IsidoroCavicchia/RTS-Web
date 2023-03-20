import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page131311Component } from './page131311.component';

describe('Page131311Component', () => {
  let component: Page131311Component;
  let fixture: ComponentFixture<Page131311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page131311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page131311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
