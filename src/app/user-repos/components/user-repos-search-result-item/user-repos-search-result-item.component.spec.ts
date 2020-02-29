import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReposSearchResultItemComponent } from './user-repos-search-result-item.component';

describe('UserReposSearchResultItemComponent', () => {
  let component: UserReposSearchResultItemComponent;
  let fixture: ComponentFixture<UserReposSearchResultItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReposSearchResultItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReposSearchResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
