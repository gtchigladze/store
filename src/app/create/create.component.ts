import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form!: FormGroup
  @Output() createFormClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required])
    })
  }

  

}
