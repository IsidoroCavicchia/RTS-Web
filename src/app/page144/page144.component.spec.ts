import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page144Component } from './page144.component';

describe('Page144Component', () => {
  let component: Page144Component;
  let fixture: ComponentFixture<Page144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
