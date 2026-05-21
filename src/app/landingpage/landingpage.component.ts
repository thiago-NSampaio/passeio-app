import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';
import { AuthGoogleService } from '../auth-google.service';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  profile: Profile | undefined;

  constructor(private router: Router, private loginService: AuthGoogleService){}

  navigate(){
    this.router.navigate(['pages/gallery'])
  }

  loginWithGoogle(){
    this.loginService.login()
  }

  isLoggedIn(){
    const dataGoogle = this.loginService.getLoggedProfile();

    console.log(dataGoogle)
    this.profile =dataGoogle;
    return !!this.profile;
  }
}
