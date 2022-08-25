import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  @Output() updateFormClose = new EventEmitter();
  form!: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required])
    })
  }

}
