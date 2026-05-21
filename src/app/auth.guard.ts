import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core'
import { AuthGoogleService } from './auth-google.service';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService: AuthGoogleService = inject(AuthGoogleService)
  const router: Router = inject(Router)

  const loggedProfile = loginService.getLoggedProfile();

  if(loggedProfile){
    return true;
  }
  
  router.navigate([''])
  return false;
};
