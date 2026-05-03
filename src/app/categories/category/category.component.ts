import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categoryForm: FormGroup;

  constructor(private service: CategoryService){
    this.categoryForm =new FormGroup({
      name: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
    })
  }

  save(){
    this.categoryForm.markAllAsTouched();

    if(this.categoryForm.valid){
          this.service.save(this.categoryForm.value).subscribe({
      next: category => {
        console.log('Salvo com sucesso', category)
        this.categoryForm.reset();
      },
      error: erro => console.error('Ocorreu um erro:', erro)
    })
    }

  }

  isFieldCategoryFormValided(fieldForm: string):boolean{
    const field = this.categoryForm.get(fieldForm);
    return (field?.invalid && field?.touched && field?.errors?.['required']) || false;
  }
}
