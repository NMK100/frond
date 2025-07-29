import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionIndexComponent } from './inscription-index.component';

describe('InscriptionIndexComponent', () => {
  let component: InscriptionIndexComponent;
  let fixture: ComponentFixture<InscriptionIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
