import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueBarComponent } from './historique-bar.component';

describe('HistoriqueBarComponent', () => {
  let component: HistoriqueBarComponent;
  let fixture: ComponentFixture<HistoriqueBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
