import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSuppressionMessageComponent } from './dialog-suppression-message.component';

describe('DialogSuppressionMessageComponent', () => {
  let component: DialogSuppressionMessageComponent;
  let fixture: ComponentFixture<DialogSuppressionMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSuppressionMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSuppressionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
