import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstractorComponent } from './add-instractor.component';

describe('AddInstractorComponent', () => {
  let component: AddInstractorComponent;
  let fixture: ComponentFixture<AddInstractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInstractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInstractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
