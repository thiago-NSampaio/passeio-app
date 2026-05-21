import { inject, Injectable, signal } from '@angular/core';
import {OAuthService, AuthConfig} from 'angular-oauth2-oidc'
import { auth } from './auth.config'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

  private oAuthService: OAuthService = inject(OAuthService);
  private router: Router = inject(Router);
  profile = signal<any>(null)

  constructor() { }

  initConfiguration(){
    this.oAuthService.configure(auth);
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(()=>{
      if(this.oAuthService.hasValidIdToken()){
        this.profile.set(this.oAuthService.getIdentityClaims())
      }
    })
  }

  login(){
    this.oAuthService.initImplicitFlow()
  }

  logout(){
    this.oAuthService.revokeTokenAndLogout();
    this.oAuthService.logOut();
    this.profile.set(null)
    this.router.navigate([''])
  }

  getLoggedProfile(){
    return this.profile();
  }
}
