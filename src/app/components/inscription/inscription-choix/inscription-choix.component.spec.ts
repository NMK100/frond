import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionChoixComponent } from './inscription-choix.component';

describe('InscriptionChoixComponent', () => {
  let component: InscriptionChoixComponent;
  let fixture: ComponentFixture<InscriptionChoixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionChoixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionChoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
