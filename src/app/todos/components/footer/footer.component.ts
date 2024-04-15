import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  todosService = inject(TodosService)
  filterEnum = FilterEnum
  
//- - - - - - - - - - 
// filterFromSig = this.todosService.filterSig
filterFromSig = computed(()=>this.todosService.filterSig())
//- - - - - - - - - - 

  changeFilter(event:Event,type:FilterEnum){
    event.preventDefault()
    this.todosService.filterSig.set(type)
  }
  activeCount = computed(()=>this.todosService.visibleTodos().length)
  checkIfTasksEmpty = computed(()=>!!this.todosService.todosSig().length)
}
