import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReposSearchBarComponent } from './user-repos-search-bar.component';

describe('UserReposSearchBarComponent', () => {
  let component: UserReposSearchBarComponent;
  let fixture: ComponentFixture<UserReposSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReposSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReposSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
