import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesFormComponent } from './addresses-form.component';

describe('AddressesFormComponent', () => {
  let component: AddressesFormComponent;
  let fixture: ComponentFixture<AddressesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
