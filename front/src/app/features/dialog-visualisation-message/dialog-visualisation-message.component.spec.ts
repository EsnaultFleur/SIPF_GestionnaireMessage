import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVisualisationMessageComponent } from './dialog-visualisation-message.component';

describe('DialogVisualisationMessageComponent', () => {
  let component: DialogVisualisationMessageComponent;
  let fixture: ComponentFixture<DialogVisualisationMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVisualisationMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogVisualisationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
