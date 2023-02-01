import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUiComponent } from './table-ui.component';

describe('TableUiComponent', () => {
  let component: TableUiComponent;
  let fixture: ComponentFixture<TableUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
