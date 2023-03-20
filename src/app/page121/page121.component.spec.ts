import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page121Component } from './page121.component';

describe('Page121Component', () => {
  let component: Page121Component;
  let fixture: ComponentFixture<Page121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
