import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page14721Component } from './page14721.component';

describe('Page14721Component', () => {
  let component: Page14721Component;
  let fixture: ComponentFixture<Page14721Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page14721Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page14721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
