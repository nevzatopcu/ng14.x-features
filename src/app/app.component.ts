import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="show = !show">{{ show ? 'hide' : 'show' }}</button>
    show = {{ show }}
    <br />
    <div *ngIf="show">Text to show</div>
  `,
  standalone: true,
  imports: [NgIf],
})
export class AppComponent {
  show = true;
}
