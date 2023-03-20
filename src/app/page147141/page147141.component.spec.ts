import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page147141Component } from './page147141.component';

describe('Page147141Component', () => {
  let component: Page147141Component;
  let fixture: ComponentFixture<Page147141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page147141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page147141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
