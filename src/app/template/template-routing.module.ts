import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: 'categories',
        loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesModule),
        pathMatch: 'full',
        data: {title: 'Categorias', subtitle: 'Realize o cadastro de novas categorias'}
      },
      {
        path: 'places',
        loadChildren: () => import('../places/places.module').then(m => m.PlacesModule),
        pathMatch: 'full',
        data: {title: 'Lugares', subtitle: 'Realize o cadastro de novos lugares'}
      },
      {
        path: 'gallery',
        loadChildren: ()=> import('../gallery/gallery.module').then(m => m.GalleryModule),
        pathMatch: 'full',
        data: {title: 'Lista de lugares', subtitle: 'Descubra os melhores lugares para explorar'}

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
