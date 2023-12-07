import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartFormComponent } from './apart-form.component';

describe('ApartFormComponent', () => {
  let component: ApartFormComponent;
  let fixture: ComponentFixture<ApartFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
