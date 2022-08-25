import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  showCreate = false;
  showUpdate = false;

  constructor() { }

  ngOnInit(): void {
  }

  closeCreate(){
    this.showCreate = false;
  }

  closeUpdate(){
  this.showUpdate = false
  }

}
