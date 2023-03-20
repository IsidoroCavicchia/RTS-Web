import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page131221Component } from './page131221.component';

describe('Page131221Component', () => {
  let component: Page131221Component;
  let fixture: ComponentFixture<Page131221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page131221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page131221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
