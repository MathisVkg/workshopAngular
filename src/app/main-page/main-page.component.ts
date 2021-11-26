import { Component, OnInit } from '@angular/core';
import { todoItemModel } from '../models/todo-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  todoItems: todoItemModel[] = new Array<todoItemModel>();

  constructor() { }

  ngOnInit(): void {
  }
  addItem(newItem: todoItemModel) {
    this.todoItems.push(newItem);
  }
}
