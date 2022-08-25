import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form!: FormGroup
  @Output() createFormClose = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required])
    })
  }


  addTodo(){
    this.todoService.addTodo(this.form.value)
    this.createFormClose.emit()
  }
  

}
