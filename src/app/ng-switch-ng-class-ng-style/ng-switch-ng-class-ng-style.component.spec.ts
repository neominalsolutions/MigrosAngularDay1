import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchNgClassNgStyleComponent } from './ng-switch-ng-class-ng-style.component';

describe('NgSwitchNgClassNgStyleComponent', () => {
  let component: NgSwitchNgClassNgStyleComponent;
  let fixture: ComponentFixture<NgSwitchNgClassNgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwitchNgClassNgStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchNgClassNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
