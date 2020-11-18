import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AASearchComponent } from './a-a-search.component';

describe('AaSearchComponent', () => {
  let component: AASearchComponent;
  let fixture: ComponentFixture<AASearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AASearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AASearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
