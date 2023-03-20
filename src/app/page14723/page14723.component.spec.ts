import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page14723Component } from './page14723.component';

describe('Page14723Component', () => {
  let component: Page14723Component;
  let fixture: ComponentFixture<Page14723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page14723Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page14723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
