import { Component, computed, effect, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';
import { TodoInterface } from '../../types/todo.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(){
    // effect(()=>{
    //   if(this.todoService.todosSig()){
    //     console.log('Iam here')
    //   }
    // })
  }
  
  todoService = inject(TodosService)


}
