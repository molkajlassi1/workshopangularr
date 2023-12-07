import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteresidenceComponent } from './deleteresidence.component';

describe('DeleteresidenceComponent', () => {
  let component: DeleteresidenceComponent;
  let fixture: ComponentFixture<DeleteresidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteresidenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteresidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
