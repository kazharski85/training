import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseListViewComponent } from './use-list-view.component';

describe('UseListViewComponent', () => {
  let component: UseListViewComponent;
  let fixture: ComponentFixture<UseListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseListViewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UseListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
