import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReposSearchResultListComponent } from './user-repos-search-result-list.component';

describe('UserReposSearchResultListComponent', () => {
  let component: UserReposSearchResultListComponent;
  let fixture: ComponentFixture<UserReposSearchResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReposSearchResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReposSearchResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
