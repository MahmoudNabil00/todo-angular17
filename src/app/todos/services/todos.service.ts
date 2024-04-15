import { computed, Injectable, signal } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { FilterEnum } from '../types/filter.enum';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }
  todosSig = signal<TodoInterface[]>([])
  filterSig = signal<FilterEnum>(FilterEnum.all)
  addTodo(text:string){
    const newTodo : TodoInterface = {
      text,
      isComplteted:false,
      id:Math.random().toString(16)
    }
    this.todosSig.update(current=>[...current,newTodo])
    console.log(newTodo)
    console.log( this.todosSig())
  }

  // This allow us to render whcih filter to render based on two Signals (todosSig & filterSig)
  visibleTodos = computed(()=>{
    const currentTodos = this.todosSig()
    const currentFilter = this.filterSig()
    if(currentFilter === FilterEnum.active){
      return currentTodos.filter((todo:TodoInterface)=>!todo.isComplteted)
    }else if(currentFilter === FilterEnum.completed){
      return currentTodos.filter((todo:TodoInterface)=>todo.isComplteted)
    }else{
      return currentTodos
    }
  })
}
