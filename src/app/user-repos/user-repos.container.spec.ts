import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReposContainer } from './user-repos.container';

describe('UserReposComponent', () => {
  let component: UserReposContainer;
  let fixture: ComponentFixture<UserReposContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReposContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReposContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
