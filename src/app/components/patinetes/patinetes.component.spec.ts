import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatinetesComponent } from './patinetes.component';

describe('PatinetesComponent', () => {
  let component: PatinetesComponent;
  let fixture: ComponentFixture<PatinetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatinetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatinetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
