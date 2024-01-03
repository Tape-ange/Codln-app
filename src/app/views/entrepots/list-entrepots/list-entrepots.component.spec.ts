import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntrepotsComponent } from './list-entrepots.component';

describe('ListEntrepotsComponent', () => {
  let component: ListEntrepotsComponent;
  let fixture: ComponentFixture<ListEntrepotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEntrepotsComponent]
    });
    fixture = TestBed.createComponent(ListEntrepotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
