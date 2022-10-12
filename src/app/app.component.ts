import {
  Component,
  EnvironmentInjector,
  inject,
  InjectionToken,
  OnInit,
} from '@angular/core';

export const TOKEN = new InjectionToken('Injection Token');

@Component({
  selector: 'app-root',
  template: ``,
  standalone: true,
  providers: [
    {
      provide: TOKEN,
      useValue: 'fromAppComponent',
    },
  ],
})
export class AppComponent implements OnInit {
  readonly token = inject<string>(TOKEN);
  readonly envInjector = inject(EnvironmentInjector);

  ngOnInit(): void {
    this.envInjector.runInContext(() => {
      console.log({
        tokenInComponent: this.token, // fromAppComponent
        fromEnvironment: inject(TOKEN, { optional: true }), // No provider found as we did not provide it on root level
      });
    });
  }
}
