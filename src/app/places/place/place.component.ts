import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Category } from '../../categories/category';
import { CategoryService } from '../../categories/category.service';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-place',
  standalone: false,
  templateUrl: './place.component.html',
  styleUrl: './place.component.scss'
})
export class PlaceComponent implements OnInit{
  form: FormGroup;
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private service: PlaceService
  ){
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      localization: new FormControl('', Validators.required),
      urlPhoto: new FormControl('', Validators.required),
      avaliation: new FormControl('', Validators.required)
    })
  }

  save(){

    this.form.markAllAsTouched()

    if(this.form.valid){
      this.service.save(this.form.value).subscribe({
  next: lugar => {
    console.log('Salvo com sucesso', lugar)
    this.form.reset();
  },
  error: erro => console.error('Ocorreu um erro:', erro)
  })
    }
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe({
      next: listCategories => this.categories = listCategories
    })
  }

  isFormValided(fieldForm: string):boolean{
    const field = this.form.get(fieldForm);
    return (field?.invalid && field?.touched && field?.errors?.['required']) || false;
  }
}
