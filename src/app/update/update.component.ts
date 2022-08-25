import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  @Input() todo: any;
  @Output() updateFormClose = new EventEmitter();
  form!: FormGroup
  
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.todo?.name,[Validators.required])
    })
  }

  updateTodo() {
    if (this.todo) {
      this.todoService.updateTodo(this.form.value);
      this.updateFormClose.emit();
    }
  }

}
