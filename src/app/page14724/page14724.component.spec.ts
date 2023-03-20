import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page14724Component } from './page14724.component';

describe('Page14724Component', () => {
  let component: Page14724Component;
  let fixture: ComponentFixture<Page14724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page14724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page14724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
