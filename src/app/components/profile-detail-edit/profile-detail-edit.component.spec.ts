import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailEditComponent } from './profile-detail-edit.component';

describe('ProfileDetailEditComponent', () => {
  let component: ProfileDetailEditComponent;
  let fixture: ComponentFixture<ProfileDetailEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileDetailEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
