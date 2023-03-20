import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page147241Component } from './page147241.component';

describe('Page147241Component', () => {
  let component: Page147241Component;
  let fixture: ComponentFixture<Page147241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page147241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page147241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
