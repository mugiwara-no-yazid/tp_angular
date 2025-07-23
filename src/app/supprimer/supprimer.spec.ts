import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Supprimer } from './supprimer';

describe('Supprimer', () => {
  let component: Supprimer;
  let fixture: ComponentFixture<Supprimer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Supprimer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Supprimer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
