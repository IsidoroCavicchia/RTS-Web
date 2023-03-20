import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page14712Component } from './page14712.component';

describe('Page14712Component', () => {
  let component: Page14712Component;
  let fixture: ComponentFixture<Page14712Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page14712Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page14712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
