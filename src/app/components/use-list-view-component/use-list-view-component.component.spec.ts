import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseListViewComponentComponent } from './use-list-view-component.component';

describe('UseListViewComponentComponent', () => {
  let component: UseListViewComponentComponent;
  let fixture: ComponentFixture<UseListViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseListViewComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseListViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
