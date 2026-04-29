import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categoryForm: FormGroup;

  constructor(){
    this.categoryForm =new FormGroup({
      name: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
    })
  }

  save(){
    this.categoryForm.markAllAsTouched();

    if(this.categoryForm.valid){
      console.log('valores digitados: ', this.categoryForm.value)
      console.log('Form validado ', this.categoryForm.valid)
    }

  }

  isFieldCategoryFormValided(fieldForm: string):boolean{
    const field = this.categoryForm.get(fieldForm);

    return (field?.invalid && field?.touched && field?.errors?.['required']) || false;
  }
}
