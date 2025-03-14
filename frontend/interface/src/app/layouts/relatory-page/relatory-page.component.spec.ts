import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoryPageComponent } from './relatory-page.component';

describe('RelatoryPageComponent', () => {
  let component: RelatoryPageComponent;
  let fixture: ComponentFixture<RelatoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatoryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
