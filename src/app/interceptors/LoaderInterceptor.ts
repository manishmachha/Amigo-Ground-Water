import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, finalize } from 'rxjs';
import { LoaderService } from '../services/loader-service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log('HTTP request intercepted:', req.url);

    this.loaderService.show();

    return next.handle(req).pipe(
      delay(500),
      finalize(() => {
        // console.log('HTTP request finalized:', req.url);
        this.loaderService.hide();
      })
    );
  }
}
