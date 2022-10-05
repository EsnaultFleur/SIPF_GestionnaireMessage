import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHistoriqueActionsComponent } from './dialog-historique-actions.component';

describe('DialogHistoriqueActionsComponent', () => {
  let component: DialogHistoriqueActionsComponent;
  let fixture: ComponentFixture<DialogHistoriqueActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogHistoriqueActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogHistoriqueActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
