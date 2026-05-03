import { Component, OnInit } from '@angular/core';
import { Place } from '../../places/place';
import { Category } from '../../categories/category';
import { PlaceService } from '../../places/place.service';
import { CategoryService } from '../../categories/category.service';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  places: Place[] = [];
  filterCategories: Category[] = [];

  constructor(
    private placeService: PlaceService,
    private categoryService: CategoryService
  ){}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(categories => this.filterCategories = categories)

    this.placeService.getAll().subscribe(places => this.places = places)
  }

  getTotalStars(place: Place):string{
    return '&#9733'.repeat(place.avaliation || 0) + '&#9734'.repeat(5 - (place.avaliation || 0))
  }
}
