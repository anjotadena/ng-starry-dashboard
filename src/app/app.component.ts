import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  Event,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterModule,
} from '@angular/router';

import { PageLoaderComponent } from './layout/page-loader/page-loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, PageLoaderComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly _router = inject(Router);
  private readonly _destroyRef = inject(DestroyRef);

  currentUrl!: string;

  constructor() {
    this._resetToEveryRouteEventNavigate();
  }

  private _resetToEveryRouteEventNavigate(): void {
    this._router.events
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((routerEvent: Event) => {
        if (routerEvent instanceof NavigationStart) {
          this.currentUrl = routerEvent.url.substring(
            routerEvent.url.lastIndexOf('/') + 1
          );
        }

        if (routerEvent instanceof NavigationEnd) {
          // empty
        }

        window.scrollTo(0, 0);
      });
  }
}
