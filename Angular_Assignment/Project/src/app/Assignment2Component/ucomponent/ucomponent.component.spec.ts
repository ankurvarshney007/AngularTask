import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcomponentComponent } from './ucomponent.component';

describe('UcomponentComponent', () => {
  let component: UcomponentComponent;
  let fixture: ComponentFixture<UcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
