import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import {ILayoutProps} from './layoutProps'
import { AuthGoogleService } from '../../auth-google.service';
@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{
  props: ILayoutProps = {title: '', subtitle: ''}

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: AuthGoogleService
  ){}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(()=> this.activatedRoute.firstChild !== null),
      map(()=> this.getPropsLayout())
    ).subscribe((props: ILayoutProps)=> this.props = props)
  }

  getPropsLayout(): ILayoutProps{
    let routeChild = this.activatedRoute.firstChild;

    while(routeChild?.firstChild){
      routeChild = routeChild.firstChild;
    }

    return routeChild?.snapshot.data as ILayoutProps;
  }

  logout(){
    this.loginService.logout()
  }
}
