import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-repos-search-bar',
  templateUrl: './user-repos-search-bar.component.html',
  styleUrls: ['./user-repos-search-bar.component.sass']
})
export class UserReposSearchBarComponent implements OnInit {
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();
  formGroup: FormGroup;
  private usernameFocused = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      username: ['', Validators.required]
    });
  }

  onSearch() {
    this.searchEvent.emit(this.formGroup.controls.username.value);
  }

  toggleUsernameFocused() {
    this.usernameFocused = !this.usernameFocused;
  }

  get displayUsernameValidationError(): boolean {
    return this.formGroup.controls.username.invalid && this.formGroup.controls.username.dirty && !this.usernameFocused;
  }

}
