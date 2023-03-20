import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page147221Component } from './page147221.component';

describe('Page147221Component', () => {
  let component: Page147221Component;
  let fixture: ComponentFixture<Page147221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page147221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page147221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
