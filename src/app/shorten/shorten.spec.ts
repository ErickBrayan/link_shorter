import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shorten } from './shorten';

describe('Shorten', () => {
  let component: Shorten;
  let fixture: ComponentFixture<Shorten>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shorten]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shorten);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
