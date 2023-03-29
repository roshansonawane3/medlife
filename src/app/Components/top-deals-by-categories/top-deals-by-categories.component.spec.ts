import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDealsByCategoriesComponent } from './top-deals-by-categories.component';

describe('TopDealsByCategoriesComponent', () => {
  let component: TopDealsByCategoriesComponent;
  let fixture: ComponentFixture<TopDealsByCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDealsByCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDealsByCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
