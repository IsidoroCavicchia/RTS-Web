import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page141Component } from './page141.component';

describe('Page141Component', () => {
  let component: Page141Component;
  let fixture: ComponentFixture<Page141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
