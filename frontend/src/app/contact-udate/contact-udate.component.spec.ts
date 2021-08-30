import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUdateComponent } from './contact-udate.component';

describe('ContactUdateComponent', () => {
  let component: ContactUdateComponent;
  let fixture: ComponentFixture<ContactUdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
