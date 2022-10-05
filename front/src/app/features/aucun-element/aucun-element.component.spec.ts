import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AucunElementComponent } from './aucun-element.component';

describe('AucunElementComponent', () => {
  let component: AucunElementComponent;
  let fixture: ComponentFixture<AucunElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AucunElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AucunElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
