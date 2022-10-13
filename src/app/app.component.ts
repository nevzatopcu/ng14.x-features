import {
  Component,
  EnvironmentInjector,
  inject,
  InjectionToken,
  OnInit,
} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const TOKEN = new InjectionToken('Injection Token');

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  standalone: true,
  imports: [RouterModule],
  providers: [
    {
      provide: TOKEN,
      useValue: 'fromAppComponent',
    },
  ],
})
export class AppComponent {}

@Component({
  template: '',
  standalone: true,
})
export class LazyComponent {
  readonly envInjector = inject(EnvironmentInjector);
  readonly token = inject(TOKEN);

  ngOnInit(): void {
    this.envInjector.runInContext(() => {
      console.log({
        fromInjector: this.token, // "fromAppComponent"
        fromEnvironmentInjector: inject(TOKEN), // "fromRouteProviders"
      });
    });
  }
}
