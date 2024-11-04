import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormActions } from '../store/form.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  form: FormGroup;

  get titleControl(): AbstractControl {
    return this.form.controls['title'];
  }

  get descriptionControl(): AbstractControl {
    return this.form.controls['description'];
  }

  get statusControl(): AbstractControl {
    return this.form.controls['status'];
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
      status: new FormControl(null),
    });
  }

  updateTitle(): void {
    console.log(this.titleControl.value);
    this.store.dispatch(FormActions.editForm({ payloadType: 'title', value: this.titleControl.value }));
  }

  updateDescription(): void {
    console.log(this.descriptionControl.value);
    this.store.dispatch(FormActions.editForm({ payloadType: 'description', value: this.descriptionControl.value }));
  }

  updateStatus(): void {
    console.log(this.statusControl.value);
    this.store.dispatch(FormActions.editForm({ payloadType: 'status', value: this.statusControl.value }));
  }
}


