import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeeProjetComponent } from './idee-projet.component';

describe('IdeeProjetComponent', () => {
  let component: IdeeProjetComponent;
  let fixture: ComponentFixture<IdeeProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeeProjetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeeProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
