import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './interceptors/error.interceptor';
import { initBackendFactory } from './services/init.service';
import { BackendService } from './services/backend.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), 
    provideHttpClient(withInterceptors([errorInterceptor])),
  {
    provide: APP_INITIALIZER,
    useFactory: initBackendFactory,
    multi: true,
    deps: [BackendService, HttpClient],
  }]
};
