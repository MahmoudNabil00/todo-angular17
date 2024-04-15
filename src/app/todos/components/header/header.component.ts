import { Component, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { FormControl, FormControlName, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  todoService = inject(TodosService)
  text : FormControl = new FormControl('')

  addTodo(){
    const value = this.text.value
    this.todoService.addTodo(value)
    this.text.setValue('')
  }
}
