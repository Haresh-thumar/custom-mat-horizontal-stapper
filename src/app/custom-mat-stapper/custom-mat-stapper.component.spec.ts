import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMatStapperComponent } from './custom-mat-stapper.component';

describe('CustomMatStapperComponent', () => {
  let component: CustomMatStapperComponent;
  let fixture: ComponentFixture<CustomMatStapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMatStapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomMatStapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
