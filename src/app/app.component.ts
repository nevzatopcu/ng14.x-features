import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  template: ``,
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class FormComponent implements OnInit {
  readonly fb = inject(FormBuilder);

  formRecord = this.fb.record<FormControl<string>>({
    foo: this.fb.control('', { nonNullable: true }),
  });

  ngOnInit(): void {
    this.formRecord.addControl(
      'bar',
      this.fb.control('', { nonNullable: true })
    ); // okay

    // this.formRecord.addControl('baz', this.fb.control('')); // error. It needs to be nonNullable
    // this.formRecord.addControl('qux', this.fb.control(0, {nonNullable: true})); // error. It needs to be string.

    this.formRecord.removeControl('bar'); // okay
  }
}
