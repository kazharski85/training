import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListMainComponent } from './user-list-main.component';

describe('UserListMainComponent', () => {
  let component: UserListMainComponent;
  let fixture: ComponentFixture<UserListMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListMainComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserListMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
