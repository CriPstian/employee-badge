import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBadgeComponent } from './employee-badge.component';

describe('EmployeeBadgeComponent', () => {
  let component: EmployeeBadgeComponent;
  let fixture: ComponentFixture<EmployeeBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeBadgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
