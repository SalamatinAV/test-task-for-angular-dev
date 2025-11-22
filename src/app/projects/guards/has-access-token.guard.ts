import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GithubService } from '../github.service';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HasAccessTokenGuard implements CanActivate {
  constructor(private router: Router, private git: GithubService) {}

  canActivate() {
    return this.git.getRepos('SalamatinAV').pipe(
      map((repos) => {
        if (repos) return true;
        this.router.navigateByUrl('/');
        return false;
      }),

      catchError(() => {
        this.router.navigateByUrl('/');
        return of(false);
      })
    );
  }
}
