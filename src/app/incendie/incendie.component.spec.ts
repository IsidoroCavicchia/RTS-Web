import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncendieComponent } from './incendie.component';

describe('IncendieComponent', () => {
  let component: IncendieComponent;
  let fixture: ComponentFixture<IncendieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncendieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncendieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
