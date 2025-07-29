import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteurProjetComponent } from './porteur-projet.component';

describe('PorteurProjetComponent', () => {
  let component: PorteurProjetComponent;
  let fixture: ComponentFixture<PorteurProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorteurProjetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorteurProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
