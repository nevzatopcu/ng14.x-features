import { inject, Injectable } from "@angular/core";
import { CanMatch, Route, UrlSegment } from "@angular/router";
import { first } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class MatchAdminGuard implements CanMatch {
  readonly authService = inject(AuthService);

  canMatch(route: Route, segments: UrlSegment[]) {
    return this.authService.isAdmin$.pipe(first());
  }
}
