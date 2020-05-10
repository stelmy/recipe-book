import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthIncerceptorService} from './auth/auth-incerceptor.service';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIncerceptorService,
      multi: true
    }
  ]
})
export class CoreModule {

}
