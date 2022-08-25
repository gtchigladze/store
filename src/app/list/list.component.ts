import { Component, OnInit } from '@angular/core';
import { filter, Observable, reduce } from 'rxjs';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  showCreate = false;
  showUpdate = false;
  todos: any[]= []


  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  
   this.getTodos()
  }

  getTodos(){
   this.todoService.getTodo().subscribe(data=>{
    this.todos = data; console.log(data)
   })
  }


  closeCreate(){
    this.showCreate = false;
    this.todos
  }

  closeUpdate(){
  this.showUpdate = false
  }

  

 

}
