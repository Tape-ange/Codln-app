import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEntrepotsComponent } from './detail-entrepots.component';

describe('DetailEntrepotsComponent', () => {
  let component: DetailEntrepotsComponent;
  let fixture: ComponentFixture<DetailEntrepotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailEntrepotsComponent]
    });
    fixture = TestBed.createComponent(DetailEntrepotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
